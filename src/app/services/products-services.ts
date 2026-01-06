import { Product } from "../type/Products";
import { ServiceBase } from "./service-base";

export class ProductService extends ServiceBase {
  
  static async getProducts(): Promise<Product[]> {
    const res = await fetch(this.getUrl('/products'), {
    method: 'GET',
    cache: 'no-store',
    headers: {
      'Accept': 'application/json',
      'User-Agent': 'Next.js Server',
    },
  
  });
    if (!res.ok) throw new Error(`Failed to fetch products: ${res.status}`);
    return res.json() as Promise<Product[]>;
  }

  static async getProductById(id: number): Promise<Product> {
    const res = await fetch(this.getUrl(`/products/${id}`), {
    method: 'GET',
    cache: 'no-store',
    headers: {
      'Accept': 'application/json',
      'User-Agent': 'Next.js Server',
    },
  
  });
    if (!res.ok) throw new Error(`Failed to fetch product ${id}: ${res.status}`);
    return res.json() as Promise<Product>;
  }


}
