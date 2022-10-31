import styles from '/styles/menuItemComponent.module.css'

interface menuItemProps {
	id: Number,
	title?: String,
	desc?: String,
	price?: Number,
	img?: String
}

function addToCart(id: Number){
	let cart: Array<Number> = JSON.parse(sessionStorage.getItem("Cart")!)
	if (cart == null) {
		cart = []
	}
	cart.push(id)
	sessionStorage.setItem("Cart", JSON.stringify(cart))
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