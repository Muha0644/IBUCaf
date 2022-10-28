import Image from 'next/image'
import { useEffect, useState } from 'react';
import styles from '/styles/cartItemComponent.module.css';

interface cartItemInterface{
	changeTotal:Function,
	id?:Number,
	amount?:Number
}

export default function CartItemComponent(props:cartItemInterface){
	const price = 1.75
	const [cntr, setContr] = useState(0)


	function setCntr(cnt:any){
		const count = cntr+cnt;
		if(count <= 0) return;
		props.changeTotal(price*cnt)
		setContr(count);
	}


	return (<div className={styles.itemContainer}>
		<Image src="/vercel.svg" alt="bruh" width={50} height={50} />
		<div className={styles.itemText}>
			<h3>Burek</h3>
			<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
		</div>
		<div className={styles.counter}>
			<button onClick={()=>setCntr(-1)}>-</button>
			<p>{cntr}</p>
			<button onClick={()=>setCntr(+1)}>+</button>
		</div>
		<h3>{(price * cntr).toFixed(2)} KM</h3>

	</div>)
}