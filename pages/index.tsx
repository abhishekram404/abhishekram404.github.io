import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Keshav Kishor Ram</title>
        <meta name="description" content="Keshav Kishor Ram" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1>Homepage</h1>
        <Link href="/about">Go to about page</Link>
      </main>

      <footer className={styles.footer}></footer>
    </div>
  );
};

export default Home;
