import type { ReactNode } from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import type { Product } from "../types/Product";

interface Props {
    children: ReactNode;
    search: string;
    setSearch: React.Dispatch<React.SetStateAction<string>>;
    favorites: Product[];
    darkMode: boolean;
    toggleDarkMode: () => void;
}

export default function MainLayout({
    children,
    search,
    setSearch,
    favorites,
    darkMode,
    toggleDarkMode,
}: Props) {
    return (
    <div className={darkMode ? "dark" : ""}>
        
        
        <div className="min-h-screen flex flex-col bg-white text-black dark:bg-gray-900 dark:text-white transition-colors duration-300">

            <Navbar
                search={search}
                setSearch={setSearch}
                favorites={favorites}
                darkMode={darkMode}
                toggleDarkMode={toggleDarkMode}
            />

            <main className="mx-auto w-full max-w-7xl flex-1 px-6 py-8">
                {children}
            </main>

            <Footer />

        </div>

    </div>
);
}