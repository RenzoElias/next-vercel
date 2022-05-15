import { FC } from "react";

import Head from 'next/head'

import { NavBar } from '../Navbar'
import styles from './MainLayout.module.scss'

export const MainLayout : FC = ({ children }) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Home</title>
        <meta name="description" content="Home page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <NavBar/>

      <main className={styles.main}>
        { children }
      </main>

    </div>
  )
}
