import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./_navbar.module.css";
import { AuthContext } from "../../apis/AuthContextApi";
import { useContext } from "react";
import { Fragment } from "react";

const Menu = () => {
  let { authUser, isLoading, Logout } = useContext(AuthContext);
  let AuthenticatedUser = () => {
    return (
      <Fragment>
        <li>
          <NavLink to="/profile" className={styles.avatarURL}>
            <img src={authUser.photoURL} alt={authUser.username} />
          </NavLink>
        </li>
        <li>
          <button
            onClick={() => {
              Logout();
            }}
            className={styles.logoutBtn}
          >
            LOGOUT
          </button>
        </li>
      </Fragment>
    );
  };

  let AnonymousUser = () => {
    return (
      <Fragment>
        <li>
          <NavLink to="/register" activeClassName="active">
            REGISTER
          </NavLink>
        </li>
        <li>
          <NavLink to="/login" activeClassName="active">
            LOGIN
          </NavLink>
        </li>
      </Fragment>
    );
  };
  return (
    <div className={styles.menuBlock}>
      <ul>
        <li>
          <NavLink to="/" activeClassName="active">
            HOME
          </NavLink>
        </li>
        {isLoading === true ? (
          "Loading..."
        ) : authUser === null ? (
          <AnonymousUser />
        ) : (
          <AuthenticatedUser />
        )}
      </ul>
    </div>
  );
};

export default Menu;
