/* eslint-disable @next/next/no-img-element */
import type { NextPage } from 'next'
import Head from 'next/head'
import { useEffect, useState } from 'react'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {

  const [frase, setFrase] = useState<string>('')

  useEffect(() => {
    getOfensa();
  }, [])

  const getOfensa = () => {
    fetch('/api/ofensas')
      .then(res => res.json())
      .then(res => setFrase(res.frase))
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>159 maneiras de xingar a mãe do seu amigo</title>
        <meta name="description" content="159 maneiras de xingar a mãe do seu amigo" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <img src="/speaker.svg" alt="Man speaking about your mom" className={styles.speaker} title="Clique para outra frase" role="button" onClick={getOfensa} />

      <section className={styles.faixa}>
        <p className={styles.frase}>{frase}</p>
      </section>

      <footer className={styles.footer}>
        <p>Feito com amor por <a href="https://github.com/eduaraujolima" target="_blank" rel="noreferrer"> <b>Eduardo Araújo</b></a> </p>
      </footer>

    </div>
  )
}

export default Home
