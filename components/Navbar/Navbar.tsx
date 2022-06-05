import React, { useEffect, useRef, useState } from "react";
import styles from "./Navbar.module.scss";
import { Icon } from "@iconify/react";

type Props = {};

const Navbar = (props: Props) => {
  const [isMounted, setMounted] = useState(false);
  const navRef = useRef(isMounted ? document?.createElement("nav") : null);
  const [isCollapsed, setCollapsed] = useState(false);

  useEffect(() => {
    setMounted(true);

    document.addEventListener("scroll", (e) => {
      if (window.scrollY <= 100) {
        setCollapsed(false);
        // console.log("less than 100");
        // navRef.current?.classList.remove(styles.collapsed);
        // navRef.current?.style.removeProperty("animation");
        return;
      }

      setCollapsed(true);
      // navRef.current?.classList.add(styles.collapsed);
    });

    return () => {
      setMounted(false);
    };
  }, []);

  return (
    <nav
      className={`${styles.navbar} ${isCollapsed && styles.collapsed}`}
      ref={navRef}
    >
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
    </nav>
  );
};

export default Navbar;
