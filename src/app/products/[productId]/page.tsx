
import { ProductService } from "@/app/services/products-services";
import styles from "./Prod.module.css";
import AddButton from "./AddButton";

export async function generateMetadata({
    params
}: {
    params: Promise<{ productId: string }>
}) {
    const { productId } = await params;

    const id = Number(productId);
    if (id) {
        const product = await ProductService.getProductById(id);
        return {
            title: product.title,
        }
    }
    return {
        title: "Product Detail Page"
    }
}

export default async function ProductDetailPage({
    params
}: {
    params: Promise<{ productId: string }>
}) {
    const { productId } = await params;

    const id = Number(productId);
    const product = await ProductService.getProductById(id);

    return (
        <div className={styles.productDetailPage}>
            <div className={styles.image}>
                <img src={product.image} alt={product.title} width={200} />
            </div>
            <div className={styles.info}>
                <h3>{product.title}</h3>
                <p className={styles.category}>{product.category}</p>
                <p>{product.description}</p>
                <p className={styles.rating}>
                    {product.rating.rate} ({product.rating.count} reviews)
                </p>
                <p className={styles.price}>${product.price}</p>
                <AddButton id={productId}/>
            </div>
        </div>
    );
}
