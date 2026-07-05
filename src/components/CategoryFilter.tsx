import type { Dispatch, SetStateAction } from "react";

interface Props {
    categories: string[];
    category: string;
    setCategory: Dispatch<SetStateAction<string>>;
}

export default function CategoryFilter({
    categories,
    category,
    setCategory,
}: Props) {
    return (
        <div className="mb-6 flex flex-wrap gap-2">
            {categories.map((cat) => (
                <button
                    key={cat}
                    onClick={() => setCategory(cat)}
                    className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors duration-200 ${
                        category === cat
                            ? "border-blue-600 bg-blue-600 text-white"
                            : "border-gray-300 bg-white text-gray-800 hover:bg-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700"
                    }`}
                >
                    {cat === "all"
                        ? "All"
                        : cat.charAt(0).toUpperCase() + cat.slice(1)}
                </button>
            ))}
        </div>
    );
}