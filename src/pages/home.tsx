import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import ProductGrid from "../components/productgrid";
import Pagination from "../components/Pagination";
import { getProducts } from "../API/products";
import SkeletonGrid from "../components/SkeletonGrid";
import type { Product } from "../types/Product";
import CategoryFilter from "../components/CategoryFilter";
import SortSelect from "../components/SortSelect";
import ProductCounter from "../components/ProductCounter";

interface HomeProps {
    search: string;
    favorites: Product[];
    onToggleFavorite: (product: Product) => void;
}

export default function Home({ search, favorites, onToggleFavorite }: HomeProps) {

    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const [currentPage, setCurrentPage] = useState(1);

    const PRODUCTS_PER_PAGE = 12;
  

    useEffect(() => {

        async function fetchProducts() {

            try {

                const data = await getProducts();
                setProducts(data);

            } catch (err) {

                setError("Neuspješno dohvaćanje proizvoda.");

            } finally {

                setLoading(false);

            }

        }

        fetchProducts();

    }, []);
    const [searchParams, setSearchParams] = useSearchParams();

    const [category, setCategory] = useState(
    searchParams.get("category") || "All"
    );
    const categories = [
    "all",
    ...new Set(products.map((p) => p.category))
    ];

    const [sort, setSort] = useState(
    searchParams.get("sort") || "default"
);
    useEffect(() => {
    setCurrentPage(1);
}, [category, sort, search]);
    useEffect(() => {
    const params = new URLSearchParams();

    if (category !== "All") {
        params.set("category", category);
    }

    if (sort !== "default") {
        params.set("sort", sort);
    }

    setSearchParams(params, { replace: true });
}, [category, sort, setSearchParams]);
    const filteredProducts = products
    .filter((product) => {
        const matchesSearch = product.title
            .toLowerCase()
            .includes(search.toLowerCase());

        const matchesCategory =
            category === "all" || product.category === category;

        return matchesSearch && matchesCategory;
    })
    
    .sort((a, b) => {
        if (sort === "price-asc") {
            return a.price - b.price;
        }

        if (sort === "price-desc") {
            return b.price - a.price;
        }

        if (sort === "name-asc") {
            return a.title.localeCompare(b.title);
        }

        if (sort === "rating-desc") {
            return b.rating - a.rating;
        }

        return 0;
    });
    const totalPages = Math.ceil(filteredProducts.length / PRODUCTS_PER_PAGE);

    const startIndex = (currentPage - 1) * PRODUCTS_PER_PAGE;

    const paginatedProducts = filteredProducts.slice(
    startIndex,
    startIndex + PRODUCTS_PER_PAGE
);
    if (loading) {
    return <SkeletonGrid />;
}

    if (error) {
        return (
            <h2 className="text-center text-red-500">
                {error}
            </h2>
        );
    }

    return (
        <>
            <h1 className="mb-8 text-4xl font-bold">
                Our Products
            </h1>

            <ProductCounter count={filteredProducts.length} />

            <CategoryFilter
            categories={categories}
            category={category}
            setCategory={setCategory}
            />
            <SortSelect
            sort={sort}
            setSort={setSort}
            />
            <ProductGrid
            products={paginatedProducts}
            favorites={favorites}
            onToggleFavorite={onToggleFavorite}
            />
            <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
            />
        </>
    );
}
