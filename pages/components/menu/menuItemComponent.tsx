import styles from '/styles/menuItemComponent.module.css'
import { addToCart } from '../../cart'

interface menuItemProps {
	id: number,
	title?: String,
	desc?: String,
	price?: Number,
	img?: String
}

function MenuItemComponent(props: menuItemProps) {
	const title = props.title ? props.title : "Food Name"
	const desc = props.desc ? props.desc : ""
	const price = props.price ? props.price : 1.5

	return (
		<div className={styles.item + " card"}>
			<h3>{title}</h3>
			<p>{desc}</p>
			<button onClick={() => addToCart(props.id)}>{price.toFixed(2) + " KM"}</button>
		</div>
	)
}

export default MenuItemComponent;