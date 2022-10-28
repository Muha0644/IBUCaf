import styles from '/styles/menuItemComponent.module.css'

interface menuItemProps{
	id?:Number,
	title?:String,
	desc?:String,
	price?:Number,
	img?:String
}

function MenuItemComponent(props:menuItemProps){
	const title = props.title ? props.title : "Food Name"
	const desc = props.desc ? props.desc : "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus at illo quam sed"
	const price = props.price ? props.price : 1.5

	return (
		<div className={styles.item + " card"}>
			<h2>{title}</h2>
			<p>{desc}</p>
			<button>{price.toFixed(2) + " KM"}</button>
		</div>
	)
}

export default MenuItemComponent;