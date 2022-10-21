import type { NextPage } from 'next'
import Image from 'next/image'
import { useState } from 'react'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  const [penis, setPenis] = useState(0);

  return (<>
    <h1 className="title">
      Welcome to <a href="https://ibu.edu.ba">burch.coffee</a>
    </h1>

    <p className="description">
      free ligma burgers {penis} times
    </p>

    <button onClick={() => setPenis(penis + 1)}>
      <Image src="/Okuu.webp" alt="bruh" width={200} height={200}></Image>
    </button>
  </>
  )
}

export default Home
