import Head from 'next/head'

import styles from './layout.module.css'

export default function Layout({ children }) {

  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Open+Sans&family=Poppins:wght@500;700&display=swap" rel="stylesheet" />
      </Head>
      <header className={styles.header}>
        <nav>
          <h1>O sistema de gestão do seu pet!</h1>
        </nav>
      </header>
      <main>{children}</main>
      <footer>Todos os direitos reservados!</footer>
    </>
  )

}