import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { getProductById } from "../API/products";
import type { Product } from "../types/Product";

export default function Product() {
    const { id } = useParams();

    const [product, setProduct] = useState<Product | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        async function fetchProduct() {
            try {
                if (!id) return;

                const data = await getProductById(id);
                setProduct(data);
            } catch {
                setError("Greška pri dohvaćanju proizvoda.");
            } finally {
                setLoading(false);
            }
        }

        fetchProduct();
    }, [id]);

    if (loading) return <h2>Učitavanje...</h2>;

    if (error) return <h2 className="text-red-500">{error}</h2>;

    if (!product) return null;

    return (
        <div className="mx-auto max-w-4xl p-6">
            <img
                src={product.thumbnail}
                alt={product.title}
                className="w-full rounded-lg"
            />

            <h1 className="mt-6 text-3xl font-bold">
                {product.title}
            </h1>

            <p className="mt-2 text-gray-600">
                {product.description}
            </p>

            <p className="mt-4 text-xl font-semibold">
                ${product.price}
            </p>

            <p className="mt-2 text-yellow-500">
                ⭐ {product.rating}
            </p>

            <button className="mt-6 rounded-lg bg-blue-600 px-6 py-2 text-white hover:bg-blue-700">
                Add to cart
            </button>
        </div>
    );
}