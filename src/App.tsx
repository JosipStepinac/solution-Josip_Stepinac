import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";

import MainLayout from "./layouts/mainlayout";

import Home from "./pages/home";
import Favorites from "./pages/favorites";
import Product from "./pages/product";
import NotFound from "./pages/notfound";

import type { Product as ProductType } from "./types/Product";

function App() {
    const [search, setSearch] = useState("");
    const [favorites, setFavorites] = useState<ProductType[]>(() => {
    const saved = localStorage.getItem("favorites");
    return saved ? JSON.parse(saved) : [];
    });
    const [darkMode, setDarkMode] = useState(false);
    useEffect(() => {
    const saved = localStorage.getItem("theme");

    if (saved === "dark") {
        setDarkMode(true);
    }
    }, []);

    useEffect(() => {
        localStorage.setItem("theme", darkMode ? "dark" : "light");
    }, [darkMode]);
    
    useEffect(() => {
        const saved = localStorage.getItem("favorites");

        if (saved) {
            setFavorites(JSON.parse(saved));
        }
    }, []);

    
    useEffect(() => {
        localStorage.setItem("favorites", JSON.stringify(favorites));
    }, [favorites]);

    
    function toggleFavorite(product: ProductType) {
        setFavorites((prev) => {
            const exists = prev.find((p) => p.id === product.id);

            if (exists) {
                return prev.filter((p) => p.id !== product.id);
            }

            return [...prev, product];
        });
    }
    function toggleDarkMode() {
    setDarkMode((prev) => !prev);
    }

    return (
        <MainLayout
            search={search}
            setSearch={setSearch}
            favorites={favorites}
            darkMode={darkMode}
            toggleDarkMode={toggleDarkMode}
        >
            <Routes>
                <Route
                    path="/"
                    element={
                        <Home
                            search={search}
                            favorites={favorites}
                            onToggleFavorite={toggleFavorite}
                        />
                    }
                />

                <Route
                    path="/favorites"
                    element={
                        <Favorites
                            favorites={favorites}
                            onToggleFavorite={toggleFavorite}
                        />
                    }
                />

                <Route path="/product/:id" element={<Product />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </MainLayout>
    );
}

export default App;