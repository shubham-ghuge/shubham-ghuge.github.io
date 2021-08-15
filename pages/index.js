import Head from 'next/head'
import Image from 'next/image'
import profilPic from "./images/new.png";
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <>
      <Head>
        <title>Shubham Ghuge</title>
      </Head>
      <main className={styles.profile}>
        <div className={styles.intro}>
          <div className={styles.wrapper}>
            <p>I am </p>
            <h1>Shubham Ghuge.</h1>
          </div>
          <div style={{ position: 'relative', height: 'var(--img-size)', width: 'var(--img-size)' }}>
            <Image src={profilPic} layout="fill" objectFit="contain" alt="shubham ghuge profile" />
          </div>
        </div>
        <div className={styles.intro_text}>
          <p><b>Software developer</b> from India 🇮🇳, Who loves to build elegant UI&apos;s.</p>
          <button className="btn-primary">Reach out to me</button>
        </div>
      </main>
    </>
  )
}
