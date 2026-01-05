import Link from "next/link";
import { ProductService } from "../services/products-services";
import { Product } from "../type/Products";
import ProductCard from "./productCard/ProductCard";
import styles from "../products/Products.module.css"


export default async function ProductList() {
    const products: Product[] = await ProductService.getProducts();
    return (
        <div className={styles.productlist}>
            {
                products.map((p: Product) => (
                    <Link href={`/products/${p.id}`} key={p.id} className={styles.productlink}>
                        <ProductCard product={p} />
                    </Link>
                ))
            }
        </div>
    )
}
