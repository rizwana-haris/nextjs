
'use client'
import styles from './ProductCard.module.css';
import { Product } from '@/app/type/Products';


interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className={styles.productCard}>
      <div >
        <img src={product.image} alt={product.title} className={styles.image} />
      </div>
      <h3>{product.title}</h3>
      <p className={styles.category}>{product.category}</p>
      <p>{product.description.slice(0, 60)}...</p>
      <p className={styles.rating}>
        {product.rating.rate} ({product.rating.count} reviews)
      </p>
      <p className={styles.price}>${product.price}</p>
      <button className={styles.button}>Add to Cart </button>      
    </div>
  )
}
