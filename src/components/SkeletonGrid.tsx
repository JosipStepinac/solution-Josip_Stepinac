import SkeletonCard from "./SkeletonCard";

export default function SkeletonGrid() {
    return (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
            {Array.from({ length: 9 }).map((_, index) => (
                <SkeletonCard key={index} />
            ))}
        </div>
    );
}