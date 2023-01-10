import React from "react";
import Styles from "./_auth.module.css";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { signInWithEmailAndPassword } from "firebase/auth";
import {auth} from "../../apis/firebase"
import phoneAuth from "./PhoneAuth";

const Login = () => {
  let navigate = useNavigate();
  const [toggle, setToggle] = useState(false);
  let [showPassword, setShowPassword] = useState(false);
  let [password, setPassword] = useState("");
  let [email, setEmail] = useState("");
  let [isLoading, setIsLoading] = useState(false);
  let togglePassword = () => {
    setToggle(!toggle);
    setShowPassword(!showPassword);
  };
  console.log(email)
  console.log(password)

  let handleSubmit = async e => {
    e.preventDefault();
    try {
      setIsLoading(true);
      let userData = await signInWithEmailAndPassword(auth, email, password);
      if (userData.user.emailVerified === true) {
        toast.success(`Successfully Logged in as ${email}`);
        navigate("/");
      } else {
        toast.error("Email not Verifieed");
      }

      console.log({ email, password });
    } catch (error) {
      toast.error(error.code);
    }
    setEmail("");
    setPassword("");
    setIsLoading(false);
  };

  return (
    <section id={Styles.authLoginBlock}>
      <article>
        <div>
          <h1>Login</h1>
          <Link to="/phone-auth" className={Styles.phoneAuth}>
            Login With Phone
          </Link>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                placeholder="enter the email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type={showPassword === true ? "text" : "password"}
                placeholder="enter the password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                required
              />
              <span className={Styles.eyeIcon} onClick={togglePassword}>
                {showPassword === true ? <AiFillEye /> : <AiFillEyeInvisible />}
              </span>
            </div>
            <div className="for-group">
              <aside>
                <span>Don't have an account ?</span>
                <span>
                  <Link to="/register">Register</Link>
                </span>
              </aside>
              <p>
                <span>
                  <Link to="/reset-password">Reset Password</Link>
                </span>
              </p>
            </div>

            <div className="form-group">
              <button>{isLoading === true ? "Loading..." : "Login"}</button>
            </div>
          </form>
        </div>
      </article>
    </section>
  );
};

export default Login;
