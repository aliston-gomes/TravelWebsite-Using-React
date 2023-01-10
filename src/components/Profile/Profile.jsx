import React from "react";
import styles from "./profile.module.css";
import ProfileMainBlock from "./ProfileMainBlock";
import ProfileSideBar from "./ProfileSideBar";

const profile = () => {
    return (
      <section id={styles.profileBlock}>
            <article>
          <ProfileSideBar />
          <ProfileMainBlock />
        </article>
      </section>
    );
};

export default profile;
