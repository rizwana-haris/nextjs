
import styles from "./Products.module.css"
import ProductList from "../components/ProductList";
import { Suspense } from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Addkart Products",
};

export default async function Products() {
   
    return (
        <div>
            <h2 className={styles.plheading}>ALL PRODUCTS</h2>
            <Suspense fallback={<span>LOADING PRODUCTS...Please wait</span>}>
                <ProductList/>
            </Suspense>
        </div>
    )
}
