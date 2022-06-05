import Layout from "components/Layout/Layout";
import React from "react";
import styles from "./Homepage.module.scss";

type Props = {};

const Homepage = (props: Props) => {
  return (
    <Layout>
      <div className={styles.homepage}>Homepage</div>
    </Layout>
  );
};

export default Homepage;
