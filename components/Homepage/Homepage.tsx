import Layout from "components/Layout/Layout";
import Head from "next/head";
import React from "react";
import styles from "./Homepage.module.scss";

type Props = {};

const Homepage = (props: Props) => {
  return (
    <Layout>
      <Head>
        <title>Keshav Kishor Ram | Portfolio</title>
      </Head>
      <div className={styles.homepage}>Homepage</div>
    </Layout>
  );
};

export default Homepage;
