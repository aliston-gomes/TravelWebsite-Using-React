import React from "react";
import styles from "./_navbar.module.css";
import { SiYourtraveldottv } from "react-icons/si";
const Logo = () => {
    return (
      <div id={styles.logoBlock}>
        <a href="#">
          <span className={styles.icon}><SiYourtraveldottv/></span>
          <span>MakeMyTravel</span>
        </a>
      </div>
    );
  
};

export default Logo;
