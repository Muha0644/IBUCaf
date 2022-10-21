import '../styles/globals.css'
import Head from 'next/head'
import Navbar from './components/global/Navbar'
import type { AppProps } from 'next/app'
import Image from 'next/image'

function MyApp({ Component, pageProps }: AppProps) {

	const pageDescription = `You should use our app NOW!  
  `

	return <>
		<Head>
			<title>IBU Cafeteria</title>
			<meta name="description" content={pageDescription} />
			<link rel="icon" href="/favicon.ico" />
		</Head>
		<Navbar />

		<div className="container">
			<main className="main">
				<Component {...pageProps} />
			</main>
		</div>

		<footer>
			<p>Best coffe in town</p>
			<a href="https://ibu.edu.ba" target="_blank" rel="noopener noreferrer">
				<span className="logo">
					<Image src="/IBU.png" alt="IBU logo" width={64} height={64} />
				</span>
			</a>
		</footer>
	</>
}

export default MyApp
