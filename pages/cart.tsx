import styles from '/styles/cart.module.css';
import CartItemComponent from './components/cart/cartItemComponent';
import { useEffect, useReducer, useState } from 'react';

function getCart() {
	let cart = sessionStorage.getItem("Cart")
	if (cart == null) return [];
	return JSON.parse(cart)
}

export default function Cart() {
	const [total, dispatch] = useReducer((state: number, change: number) => {
		return state + change;
	}, 0);

	const [list, setList] = useState()
	useEffect(() => {
		let uselessCounter = 0;
		setList(
			getCart().map((id: any) => {
				if (id == null) { return }
				return <CartItemComponent changeTotal={dispatch} id={id} key={uselessCounter++} />
			}))
	}, [])

	return (<>
		<h2 className={styles.title}>My Cart</h2>
		<div className={styles.orderedItems}>
			{list}
		</div>
		<div className={styles.total}>
			<h2>Total:</h2>
			<h2>{total.toFixed(2)} KM</h2>
		</div>
		<button className={styles.checkout}>Checkout</button>
	</>)
}