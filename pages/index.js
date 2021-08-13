import Head from 'next/head'
import Image from 'next/image'
import profilPic from "./images/profile.png";
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Shubham Ghuge</title>
      </Head>
      <main className={styles.profile}>
        <Image src={profilPic} alt="shubham ghuge profile" />
        <div className={styles.details}>
          <p>Hey There, Myself</p>
          <h1 className={styles.title}>
            Shubham Ghuge.
        </h1>
          <h2>I am a software developer.</h2>
          <button className="btn-primary">Contact Me</button>
        </div>

      </main>
    </div>
  )
}
