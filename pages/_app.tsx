import '../styles/globals.css'
import { GoogleOAuthProvider } from '@react-oauth/google';
import creds from '../client_secret_119134146400-90o683j9a34j40kc5lcesusksje3hf6g.apps.googleusercontent.com.json' assert {type: 'json'}
import Head from 'next/head'
import Navbar from './components/global/Navbar'
import type { AppProps } from 'next/app'
import Image from 'next/image'

function MyApp({ Component, pageProps }: AppProps) {

	const pageDescription = `You should use our app NOW!  
  `

	return <GoogleOAuthProvider clientId={creds.m$b.client_id}>
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
	</GoogleOAuthProvider>
}

export default MyApp
