import React from "react";
import styles from "./Navbar.module.scss";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <div className={styles.navbar}>
      <div className={styles.navbarLogo}>
        <div className={styles.first}></div>
        <div className={styles.second}></div>
      </div>
    </div>
  );
};

export default Navbar;
