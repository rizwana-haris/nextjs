'use client';

import { useContext } from "react";
import { CartContext } from "@/context/CartContext";
import { Product } from "../../type/Products";
import styles from "./CartItem.module.css"; 

interface CartItemProps {
  product: Product;
}

export const CartItem = ({ product }: CartItemProps) => {
  const cartContext = useContext(CartContext);

  if (!cartContext) {
    throw new Error("CartItem must be used within a CartContextProvider");
  }

  const { cartItems, addToCart, removeFromCart } = cartContext;
  const quantity = cartItems[String(product.id)] || 0;

  return (
    <div className={styles.cartItem}>
      <div className={styles.img}>
       <img src={product.image} alt={product.title} />
      </div>
      <div className={styles.info}>
        <h4>{product.title}</h4>
        <p>{product.category}</p>
        <p>{product.description}</p>
        <p className={styles.price}>${product.price}</p>

        <div className={styles.quantity}>
          <button onClick={() => removeFromCart(String(product.id))}>-</button>
          <span>{quantity}</span>
          <button onClick={() => addToCart(String(product.id))}>+</button>
        </div>
      </div>
    </div>
  );
};
