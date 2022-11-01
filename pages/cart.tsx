import styles from '/styles/cart.module.css';
import CartItemComponent from './components/cart/cartItemComponent';
import React, { useEffect, useReducer, useState } from 'react';

export function addToCart(id: number) { //+id to add, -id to rm
	const storeCart = sessionStorage.getItem("MyCart")
	let cart: Array<Array<number>> = storeCart ? JSON.parse(storeCart) : []; //set if empty
	if (cart.find((arr) => { return arr[0] == Math.abs(id) }) == undefined) {
		cart.push([Math.abs(id), 1])
	} else { //exists
		const index = cart.findIndex((arr) => { return arr[0] == Math.abs(id) })
		cart[index][1] += id > 0 ? 1 : -1
		if(cart[index][1] == 0) cart[index] = [-1,0]
	}
	sessionStorage.setItem("MyCart", JSON.stringify(cart))
	//alert(`added ${id} to cart`)
}

export default function Cart() {
	const [total, dispatch] = useReducer((state: number, change: number) => {
		return state + change;
	}, 0);

	const [list, setList] = useState<JSX.Element[]>()
	useEffect(() => {
		setList(
			JSON.parse(sessionStorage.getItem("MyCart") || "[]").map((each: Array<number>) => {
				if(each[0] == -1) return
				return <CartItemComponent changeTotal={dispatch} id={Number(each[0])} amount={each[1]} key={each[0]} />
			}))
	}, [])

	return (<>
		<h2 className={styles.title}>My Cart</h2>
		<div className={styles.orderedItems}>
			{total == 0 ? <h3 style={{justifySelf: "center", display: "flex", justifyContent: 'center'}}>Please add some shit to your cart</h3> : ""}
			{list}
		</div>
		<div className={styles.total}>
			<h2>Total:</h2>
			<h2>{total.toFixed(2)} KM</h2>
		</div>
		<button className={styles.checkout}>Checkout</button>
	</>)
}