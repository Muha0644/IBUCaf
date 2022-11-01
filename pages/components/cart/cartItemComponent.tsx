import Image from 'next/image'
import { useEffect, useState } from 'react';
import { addToCart } from '../../cart';
import styles from '/styles/cartItemComponent.module.css';

interface cartItemInterface{
	changeTotal:Function,
	id:number,
	amount?:number
}

export default function CartItemComponent(props:cartItemInterface){
	const [cntr, setContr] = useState(props.amount ? props.amount : 0)
	const [price, setPrice]= useState(0)
	const [name , setName] = useState("Loading")
	const [desc , setDesc] = useState("Lorem, ipsum dolor sit amet consectetur adipisicing elit.")
	
	const [hidden, setHidden] = useState("")
	let ran = 0
	useEffect(()=>{
		if(ran) return //if it's already initilized, don't run again
		fetch(`/api/menu/${props.id}`).then((res) => res.json()).then((data) => {
			setPrice(data.price)
			props.changeTotal(data.price*cntr)
			setName(data.name)
			setDesc(data.desc)
		})
		ran++ //doing this because it runs twice sometimes
	},[])

	function setCntr(cnt:number){
		const count = cntr+cnt;
		if(count == 0) setHidden("hidden");
		props.changeTotal(price*cnt)
		setContr(count);
		addToCart(props.id*cnt);
	}


	return !hidden ? (<div className={styles.itemContainer.concat("", hidden)}>
		<Image src="/vercel.svg" alt="bruh" width={50} height={50}  />
		<div className={styles.itemText}>
			<h3>{name}</h3>
			<p>{desc}</p>
		</div>
		<div className={styles.counter}>
			<button onClick={()=>setCntr(-1)}>-</button>
			<p>{cntr}</p>
			<button onClick={()=>setCntr(+1)}>+</button>
		</div>
		<h3>{(price * cntr).toFixed(2)} KM</h3>

	</div>) : <div className={"hidden"}></div>
}