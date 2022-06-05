import Layout from "components/Layout/Layout";
import Head from "next/head";
import Image from "next/image";
import React from "react";
import styles from "./Homepage.module.scss";

type Props = {};

const Homepage = (props: Props) => {
  return (
    <Layout>
      <Head>
        <title>Keshav Kishor Ram | Portfolio</title>
      </Head>
      <div className={styles.homepage}>
        <div className={styles.left}>
          <h1>
            Hello, I am <br />
            <span className={`${styles.mark} ${styles.big}`}>
              {" "}
              Keshav Kishor Ram.
            </span>{" "}
            <br />I am a{" "}
            <span className={styles.underline}>React / Next JS</span>
            developer.
          </h1>
          <p>
            I can build high quality and performant website for your business
            using React / Next JS.
          </p>
          <button className={styles.hireMeBtn}>Hire me</button>
        </div>
        <div className={styles.right}>
          <Image src={"/i1.png"} height={600} width={290} alt="illustration" />
        </div>
      </div>
    </Layout>
  );
};

export default Homepage;
