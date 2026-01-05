
import { ProductService } from "@/app/services/products-services";
import styles from "./Prod.module.css";
import AddButton from "./AddButton";

type Params = { productId: string };

export async function generateMetadata({
    params
}: {
    params: Params | Promise<Params>
}) {
    const { productId } = await params;
    const id = Number(productId);

    if (isNaN(id)) {
        return { title: "Product Detail Page" };
    }

    const product = await ProductService.getProductById(id);

    if (!product) {
        return { title: "Product Not Found" };
    }

    return { title: product.title };
}

export default async function ProductDetailPage({
    params
}: {
    params: Params | Promise<Params>
}) {
    const { productId } = await params;
    const id = Number(productId);

    if (isNaN(id)) {
        return <div>Invalid Product ID</div>;
    }

    const product = await ProductService.getProductById(id);

    if (!product) {
        return <div>Product not found.</div>;
    }

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
                    {product.rating?.rate ?? 0} ({product.rating?.count ?? 0} reviews)
                </p>
                <p className={styles.price}>${product.price}</p>
                <AddButton id={productId} />
            </div>
        </div>
    );
}
