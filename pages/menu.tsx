import styles from '/styles/menu.module.css';
import MenuItemComponent from './components/menu/menuItemComponent';
import menu from '../public/menu.json' assert {type: 'json'}


interface menu {
	menuArr: Array<Object>
}

function menuComponent(props: menu){
	let uc = 0

	return (
		<div className={styles.menuContainer}>
			{props.menuArr.map((each:any) => {
				return <MenuItemComponent id={each.id} key={uc++}
				title={each.name} price={each.price} desc={each.desc}/>
			})}
		</div>
	)
}

export async function getStaticProps() {
	return { props: { menuArr: menu.menu } };
}

export default menuComponent;