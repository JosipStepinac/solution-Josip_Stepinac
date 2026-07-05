interface Props {
    count: number;
}

export default function ProductCounter({ count }: Props) {
    return (
        <p className="mb-4 text-gray-500 dark:text-gray-400">
            Found products: {count}
        </p>
    );
}