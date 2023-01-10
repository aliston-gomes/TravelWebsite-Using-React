import React from "react";
import Menu from "./Menu";
import Logo from './Logo';
import styles from "./_navbar.module.css";

const Navbar = () => {
    return (
      <section id={styles.navbarBlock}>
        <article>
        <Logo/>
          <Menu />
        </article>
      </section>
    );
};

export default Navbar;
