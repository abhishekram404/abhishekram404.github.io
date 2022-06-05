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

      <ul className={styles.navbarNav}>
        <li className={styles.navItem}>Home</li>
        <li className={styles.navItem}>Skills</li>
        <li className={styles.navItem}>Projects</li>
        <li className={styles.navItem}>About</li>
        <li className={styles.navItem}>Contact</li>
      </ul>
    </div>
  );
};

export default Navbar;
