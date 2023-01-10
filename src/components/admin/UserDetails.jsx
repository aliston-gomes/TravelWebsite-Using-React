import React from "react";
import { useLocation } from "react-router-dom";
import Styles from "./_admin.module.css";
const UserDetails = props => {
  let location = useLocation();
  let {
    uid,
    displayName,
    firstname,
    lastname,
    email,
    address,
    gender,
    city,
    photoURL,
  } = location.state;
  return (
    <section className={Styles.userDetails}>
      <article>
        <aside className={Styles.userPhoto}>
          <img src={photoURL} alt="" />
        </aside>
        <aside className={Styles.userDescription}>
          <header>
            <h1>{displayName}</h1>
          </header>
          <main>
            <ul>
              <li>firstname : {firstname}</li>
              <li>lastname : {lastname}</li>
              <li>email : {email}</li>
              <li>gender : {gender}</li>
              <li>city : {city}</li>
              <li>address : {address}</li>
            </ul>
          </main>
          <footer></footer>
        </aside>
      </article>
    </section>
  );
};

export default UserDetails;
