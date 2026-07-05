interface Props {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
}

export default function Pagination({
    currentPage,
    totalPages,
    onPageChange,
}: Props) {
    if (totalPages <= 1) return null;

    return (
        <div className="mt-10 flex items-center justify-center gap-2">

            <button
                onClick={() => onPageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="rounded-lg border px-4 py-2 disabled:opacity-40"
            >
                Previous
            </button>

            {Array.from({ length: totalPages }, (_, i) => (
                <button
                    key={i}
                    onClick={() => onPageChange(i + 1)}
                    className={`rounded-lg px-4 py-2 transition ${
                        currentPage === i + 1
                            ? "bg-blue-600 text-white"
                            : "border hover:bg-gray-100 dark:hover:bg-gray-700"
                    }`}
                >
                    {i + 1}
                </button>
            ))}

            <button
                onClick={() => onPageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="rounded-lg border px-4 py-2 disabled:opacity-40"
            >
                Next
            </button>

        </div>
    );
}