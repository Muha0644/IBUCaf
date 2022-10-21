import styles from '/styles/Navbar.module.css'
import Link from 'next/link'
import { useRouter } from 'next/router';


function Navbar(){
	const router = useRouter();

	return (
		<nav className={styles.Navbar}>
			{/*put some cool logo here maybe*/}
			<ul>
				<li className={router.pathname == "/" ? styles.active : ""}>
					<Link href="/">Home</Link>
				</li>
				<li className={router.pathname == "/menu" ? styles.active : ""}>
					<Link href="/menu">Menu</Link>
				</li>
				<li className={router.pathname == "/order" ? styles.active : ""}>
					<Link href="/order">Place Order</Link>
				</li>
				<li className={router.pathname == "/about" ? styles.active : ""}>
					<Link href="/about">About</Link>
				</li>
				<li className={router.pathname == "/login" ? styles.active : ""} style={{float: "right"}}>
					<Link href="/login">Login</Link>
				</li>
			</ul>
  		</nav>
	)
}

export default Navbar;