"use client";

import { createContext, useState, ReactNode } from "react";

interface CartItems {
  [key: string]: number;
}

interface CartContextType {
  cartItems: CartItems;
  addToCart: (id: string) => void;
  removeFromCart: (id: string) => void;
}

export const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartContextProvider({ children }: { children: ReactNode }) {
  const [cartItems, setCartItems] = useState<CartItems>({});

   const addToCart = (id: string) => {
    setCartItems((prev) => ({
      ...prev,
      [id]: (prev[id] || 0) + 1,
    }));
  };

 const removeFromCart = (id: string) => {
    setCartItems((prev) => {
      const newCart = { ...prev };
      if (newCart[id] > 1) {
        newCart[id] -= 1;
      } else {
        delete newCart[id];
      }
      return newCart;
    });
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

