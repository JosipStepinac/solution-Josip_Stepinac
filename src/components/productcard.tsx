import { Link } from "react-router-dom";
import { Heart, Star } from "lucide-react";
import { motion } from "framer-motion";

import type { Product } from "../types/Product";

interface Props {
    product: Product;
    onToggleFavorite: (product: Product) => void;
    isFavorite: boolean;
}

export default function ProductCard({ product, onToggleFavorite, isFavorite }: Props) {
  return (
    <motion.div className="overflow-hidden rounded-xl bg-white text-black shadow-md dark:bg-gray-800 dark:text-white"
      whileHover={{ scale: 1.03 }}
      transition={{ duration: 0.2 }}
    >
      <img
        src={product.thumbnail}
        alt={product.title}
        className="h-56 w-full object-cover"
      />

      <div className="space-y-3 p-5">
        <h2 className="text-xl font-semibold">
          {product.title}
        </h2>

        <p className="text-gray-500">
          {product.description}
        </p>

        <div className="flex items-center gap-2">
          <Star
            size={18}
            className="fill-yellow-400 text-yellow-400"
          />
          {product.rating}
        </div>

        <h3 className="text-2xl font-bold text-blue-600">
          € {product.price}
        </h3>

        <Link
          to={`/product/${product.id}`}
          className="block rounded-lg bg-blue-600 py-2 text-center text-white transition hover:bg-blue-700"
        >
          Details
        </Link>
        <button onClick={() => onToggleFavorite(product)}>
    <Heart
        fill={isFavorite ? "red" : "none"}
        className={isFavorite ? "text-red-500" : ""}
    />
</button>
      </div>
    </motion.div>
  );
}