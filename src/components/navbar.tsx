import { Link } from "react-router-dom";
import { Heart, Search } from "lucide-react";
import type { Product } from "../types/Product";

interface NavbarProps {
    search: string;
    setSearch: React.Dispatch<React.SetStateAction<string>>;
    favorites: Product[];
    darkMode: boolean;
    toggleDarkMode: () => void;
}

export default function Navbar({
    search,
    setSearch,
    favorites,
    darkMode,
    toggleDarkMode,
}: NavbarProps) {
    return (
        <nav className="overflow-hidden rounded-xl bg-white text-black shadow-md dark:bg-gray-800 dark:text-white">
            <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

                <Link to="/" className="text-2xl font-bold text-blue-600">
                    Shop
                </Link>

                <div className="relative hidden md:block">
                    <Search
                        className="absolute left-3 top-2.5 text-gray-400"
                        size={18}
                    />

                    <input
                        type="text"
                        placeholder="Pretraži proizvode..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="w-80 rounded-lg border py-2 pl-10 pr-4"
                    />
                </div>

                <div className="flex items-center gap-5">
                    <Link to="/favorites" className="relative">
                        <Heart size={24} />

                        {favorites.length > 0 && (
                            <span className="absolute -right-2 -top-2 rounded-full bg-red-500 px-2 text-xs text-white">
                                {favorites.length}
                            </span>
                        )}
                    </Link>

                    <button
                    onClick={toggleDarkMode}
                    className="rounded-lg border px-3 py-1 text-sm"
                    >
                    {darkMode ? "🌙 Dark" : "☀️ Light"}
                    </button>
                </div>
            </div>
        </nav>
    );
}