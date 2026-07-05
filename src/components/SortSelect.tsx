import type { Dispatch, SetStateAction } from "react";

interface Props {
    sort: string;
    setSort: Dispatch<SetStateAction<string>>;
}

export default function SortSelect({
    sort,
    setSort,
}: Props) {
    return (
        <div className="mb-6">
            <select
                value={sort}
                onChange={(e) => setSort(e.target.value)}
                className="rounded-lg border px-3 py-2 dark:border-gray-600 dark:bg-gray-800 dark:text-white"
            >
                <option value="default">Default</option>
                <option value="price-asc">Price ↑</option>
                <option value="price-desc">Price ↓</option>
                <option value="rating-desc">Rating</option>
            </select>
        </div>
    );
}