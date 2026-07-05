import type { Product } from "../types/Product";

interface ProductsResponse {
  products: Product[];
}

export async function getProducts(): Promise<Product[]> {
  const response = await fetch("https://dummyjson.com/products");

  if (!response.ok) {
    throw new Error("Greška pri dohvaćanju proizvoda.");
  }

  const data: ProductsResponse = await response.json();

  return data.products;
}

export async function getProductById(id: string) {
    const response = await fetch(`https://dummyjson.com/products/${id}`);

    if (!response.ok) {
        throw new Error("Greška pri dohvaćanju proizvoda.");
    }

    return response.json();
}