'use client';

import { useState, useEffect, useContext } from "react";
import { CartContext } from "@/context/CartContext";
import { CartItem } from "../components/cartItem/CartItem";
import { Product } from "../type/Products";
import styles from "./Cart.module.css";

export default function Cart() {
  const cartContext = useContext(CartContext);

  if (!cartContext) {
    throw new Error("Cart must be used within a CartContextProvider");
  }

  const { cartItems } = cartContext;

  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    async function fetchProducts() {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      setProducts(data);
    }
    fetchProducts();
  }, []);


  const itemsInCart = products.filter((p) => cartItems[String(p.id)] > 0);

  return (
    <div className={styles.cart}>
      <h4>YOUR CART</h4>
      {itemsInCart.length === 0 ? (
        <h5>Your cart is empty</h5>
      ) : (
        itemsInCart.map((p) => <CartItem key={p.id} product={p} />)
      )}
    </div>
  );
}
