import React from "react";
import { Link } from "react-router-dom";
import Styles from "./_admin.module.css";
const User = props => {
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
  } = props;
  return (
    <div>
      <figure>
        <img src={photoURL} alt={displayName} />
      </figure>
      <main>
        <h2>{displayName}</h2>
        <p>{gender}</p>
        <p className={Styles.address}>{address}</p>
        <p>
          <Link to={{ pathname: `/admin/${uid}` }} state={props}>
            view user
          </Link>
        </p>
      </main>
    </div>
  );
};

export default User;
