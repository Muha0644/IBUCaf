import { NextPage } from 'next/types';
import styles from '/styles/menu.module.css';
import MenuItemComponent from './components/menu/menuItemComponent';

const menuComponent: NextPage = () =>{

	  
	return (
		<div className={styles.menuContainer}>
			<MenuItemComponent title="Burek" price={10} />
			<MenuItemComponent title="Čevapi" price={0.00}/>
			<MenuItemComponent title="Palačinka" price={8}/>
			<MenuItemComponent />
			<MenuItemComponent />
			<MenuItemComponent />
			<MenuItemComponent />
			<MenuItemComponent />
			<MenuItemComponent />
			<MenuItemComponent />
			<MenuItemComponent />
			<MenuItemComponent />
		</div>
	)
}


export default menuComponent;