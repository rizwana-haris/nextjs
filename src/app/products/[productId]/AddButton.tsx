'use client';

import { CartContext } from '@/context/CartContext'
import { useContext } from 'react'
import styles from './Prod.module.css'

export default function AddButton({ id }: { id: string }) {
    const cart = useContext(CartContext);

    return (
        <button className={styles.button}
            onClick={() => cart?.addToCart(id)}>
            Add to Cart
        </button>
    )
}
