import ProductCard from "./productcard";

import type { Product } from "../types/Product";

interface Props {
  products: Product[];
  favorites: Product[];
  onToggleFavorite: (product: Product) => void;
}

export default function ProductGrid({ products, favorites, onToggleFavorite }: Props) {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
        {products.map((product) => (
            <ProductCard
                key={product.id}
                product={product}
                isFavorite={favorites.some((f) => f.id === product.id)}
                onToggleFavorite={onToggleFavorite}
            />
        ))}
    </div>
);
}