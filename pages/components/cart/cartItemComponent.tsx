import Image from 'next/image'
import { useEffect, useState } from 'react';
import styles from '/styles/cartItemComponent.module.css';

interface cartItemInterface{
	changeTotal:Function,
	id:number,
	amount?:Number
}

export default function CartItemComponent(props:cartItemInterface){
	const [cntr, setContr] = useState(0)
	const [price, setPrice]= useState(1.75)
	const [name , setName] = useState("Loading")
	const [desc , setDesc] = useState("Lorem, ipsum dolor sit amet consectetur adipisicing elit.")
	
	useEffect(()=>{
		let meta:Object = {}
		fetch(`/api/menu/${props.id}`).then((res) => res.json()).then((data) => {
			console.log(data)
			setPrice(data.price)	
			setName(data.name)
			setDesc(data.desc)
		})
	},[])

	function setCntr(cnt:number){
		const count = cntr+cnt;
		if(count <= 0) return;
		props.changeTotal(price*cnt)
		setContr(count);
	}


	return (<div className={styles.itemContainer}>
		<Image src="/vercel.svg" alt="bruh" width={50} height={50} />
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

	</div>)
}