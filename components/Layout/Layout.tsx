import Navbar from "components/Navbar/Navbar";
import React from "react";
import styles from "./Layout.module.scss";

type Props = {
  children: React.ReactNode;
};

const Layout = (props: Props) => {
  return (
    <div className={styles.layout}>
      <Navbar />
      <div className={styles.layoutChildrenCont}>
        <main className={styles.layoutChildren}>{props.children}</main>
      </div>
    </div>
  );
};

export default Layout;
