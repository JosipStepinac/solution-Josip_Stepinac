export default function SkeletonCard() {
    return (
        <div className="overflow-hidden rounded-xl bg-white shadow-md dark:bg-gray-800">
            <div className="h-56 w-full animate-pulse bg-gray-300 dark:bg-gray-700" />

            <div className="space-y-4 p-5">

                <div className="h-6 w-3/4 animate-pulse rounded bg-gray-300 dark:bg-gray-700" />

                <div className="space-y-2">
                    <div className="h-4 w-full animate-pulse rounded bg-gray-300 dark:bg-gray-700" />
                    <div className="h-4 w-2/3 animate-pulse rounded bg-gray-300 dark:bg-gray-700" />
                </div>

                <div className="h-5 w-16 animate-pulse rounded bg-gray-300 dark:bg-gray-700" />

                <div className="h-8 w-24 animate-pulse rounded bg-gray-300 dark:bg-gray-700" />

                <div className="h-10 w-full animate-pulse rounded-lg bg-gray-300 dark:bg-gray-700" />

            </div>
        </div>
    );
}