import type { Product } from "../types/Product";
import ProductCard from "../components/productcard";

interface Props {
    favorites: Product[];
    onToggleFavorite: (product: Product) => void;
}

export default function Favorites({
    favorites,
    onToggleFavorite,
}: Props) {
    return (
        <div>
            <h1 className="text-3xl font-bold mb-6">
                ❤️ Favorites
            </h1>

            {favorites.length === 0 ? (
                <p>Nema favorita.</p>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {favorites.map((product) => (
                        <ProductCard
                            key={product.id}
                            product={product}
                            isFavorite={true}
                            onToggleFavorite={onToggleFavorite}
                        />
                    ))}
                </div>
            )}
        </div>
    );
}