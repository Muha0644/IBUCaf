import styles from '/styles/cart.module.css';
import CartItemComponent from './components/cart/cartItemComponent';
import { useState } from 'react';

export default function Cart(){
	const [total, setTotal] = useState(0)
	function totalChange(amount:number){
		setTotal(total+amount);
	}

	return(<>
		<h2 className={styles.title}>My Cart</h2>
		<div className={styles.orderedItems}>
			<CartItemComponent changeTotal={totalChange}/>
			<CartItemComponent changeTotal={totalChange}/>
		
		</div>
		<div className={styles.total}>
			<h2>Total:</h2>
			<h2>{total.toFixed(2)} KM</h2>
		</div>
		<button className={styles.checkout}>Checkout</button>
	</>)
}