import { Product } from "../type/Products";
import { ServiceBase } from "./service-base";

export class ProductService extends ServiceBase {

  
  static async getProducts(): Promise<Product[]> {
    try {
      const res = await fetch(this.getUrl('/products'), {
        cache: "no-store", 
      });

      if (!res.ok) {
        console.error(`[ProductService] Failed to fetch products: ${res.status} ${res.statusText}`);
        return []; 
      }

      const data = await res.json();
      if (!Array.isArray(data)) {
        console.error(`[ProductService] Invalid products data`, data);
        return [];
      }

      return data as Product[];

    } catch (err) {
      console.error(`[ProductService] Exception while fetching products:`, err);
      return []; // fallback to empty array
    }
  }

  
  static async getProductById(id: number): Promise<Product | null> {
    try {
      const res = await fetch(this.getUrl(`/products/${id}`), {
        cache: "no-store",
      });

      if (!res.ok) {
        console.error(`[ProductService] Failed to fetch product ${id}: ${res.status} ${res.statusText}`);
        return null;
      }

      const product = await res.json();
      if (!product || typeof product !== "object") {
        console.error(`[ProductService] Invalid product data for ID ${id}`, product);
        return null;
      }

      return product as Product;

    } catch (err) {
      console.error(`[ProductService] Exception while fetching product ${id}:`, err);
      return null;
    }
  }
}
