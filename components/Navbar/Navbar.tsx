import React, { useEffect, useState } from "react";
import styles from "./Navbar.module.scss";
import { Icon } from "@iconify/react";

type Props = {};

const Navbar = (props: Props) => {
  const [isCollapsed, setCollapsed] = useState(false);

  const handleNavbarCollapse = () => {
    if (window.scrollY <= 100) {
      setCollapsed(false);
      return;
    }
    setCollapsed(true);
  };
  useEffect(() => {
    handleNavbarCollapse();
    document.addEventListener("scroll", handleNavbarCollapse);

    return () => {
      document.removeEventListener("scroll", handleNavbarCollapse);
    };
  }, []);

  return (
    <>
      {isCollapsed && (
        <div className={styles.collapsedNav}>
          <Icon icon="ci:menu-alt-02" className={styles.menuIcon} />
          <ul className={styles.collapsedNavList}>
            <li className={styles.collapsedNavItem}>Home</li>
            <li className={styles.collapsedNavItem}>Skills</li>
            <li className={styles.collapsedNavItem}>Projects</li>
            <li className={styles.collapsedNavItem}>About</li>
            <li className={styles.collapsedNavItem}>Contact</li>
          </ul>
        </div>
      )}
      <div className={styles.nav1}>
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
    </>
  );
};

export default Navbar;
