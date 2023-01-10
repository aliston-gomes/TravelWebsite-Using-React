import React from "react";
import { useState } from "react";
import { toast } from "react-toastify";
import styles from "./_auth.module.css";
import { useNavigate } from "react-router-dom";
import { auth } from "../../apis/firebase";
import { updateProfile } from "firebase/auth";
import md5 from "md5";
// import {RiUser6Fill} from "react-icons/ri"

//!BUILT IN FIREBASE FUNCTION FOR AUTHENTICATION
import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
} from "firebase/auth";

const Register = () => {
  let navigate = useNavigate();
  let [state, setState] = useState({
    username: "",
    email: "",
    password: "",
    confirmpassword: "",
    isLoading: false,
  });
  let { username, password, email, confirmpassword, isLoading } = state;
  let handleChange = e => {
    let { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  let handleSubmit = async e => {
    e.preventDefault();
    try {
      if (password !== confirmpassword) {
        toast.error("Passwords Does Not Match");
      } else {
        setState({ isLoading: true });
        let userData = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );
        sendEmailVerification(userData.user);
        let messege = `Email verification has been sent to ${email} please verify`;
        updateProfile(userData.user, {
          displayName: username,
          photoURL: `https://www.gravatar.com/avatar/${md5(email)}?q=identicon`,
        });
        toast.success(messege);
        navigate("/login");
        console.log(state);
      }
      console.log(state);
    } catch (error) {
      toast.error(error.code);
    }
    //RESETTING FORM
    setState({
      username: "",
      email: "",
      password: "",
      confirmpassword: "",
      isLoading: false,
    });
  };

  return (
    <section id={styles.authBlock}>
      <article>
        <div className={styles.authLeft}>
          <h1>Register</h1>
          <img
            src="https://uploads-ssl.webflow.com/60658b46b03f0cf83ac1485d/627cc8ad859daaadbb518989_hero-pwless.svg"
            alt=""
          />
        </div>
        <div className={styles.authRight}>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <span>
                <label htmlFor="username">Username</label>
                {/* <RiUser6Fill /> */}
              </span>

              <input
                type="text"
                id="username"
                name="username"
                placeholder="Enter Username"
                value={username}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter Email"
                value={email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Enter Password"
                value={password}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Confirm Password</label>
              <input
                type="password"
                id="confirmpassword"
                name="confirmpassword"
                placeholder="Re-Enter Password"
                value={confirmpassword}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <button>{isLoading === true ? "loading..." : "Register"}</button>
            </div>
          </form>
        </div>
      </article>
    </section>
  );
};

export default Register;
