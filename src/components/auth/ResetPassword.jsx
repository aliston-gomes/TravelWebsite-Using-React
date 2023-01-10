import React from "react";
import styles from "./_auth.module.css";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { auth } from "../../apis/firebase";
import { sendPasswordResetEmail } from "firebase/auth";

const Login = () => {
  let navigate = useNavigate();
  let [email, setEmail] = useState("");
  let [isLoading, setIsLoading] = useState(false);

  let handleSubmit = async e => {
    e.preventDefault();
      try {
          setIsLoading(true);
          sendPasswordResetEmail(auth, email);
          toast.info(`Password reset Link has been sent to ${email}`)
          navigate("/login")
      
    } catch (error) {
      toast.error(error.code);
    }
    setEmail("");
    setIsLoading(false);
  };

  return (
    <section id={styles.authLoginBlock}>
      <article>
        <div>
          <h1>Reset Password</h1>
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

            <div className="for-group">
              <aside>
                <span>Already have an account ?</span>
                <span>
                  <Link to="/login">Login</Link>
                </span>
              </aside>
            </div>

            <div className="form-group">
              <button>
                {isLoading === true ? "Loading..." : "Reset Password"}
              </button>
            </div>
          </form>
        </div>
      </article>
    </section>
  );
};

export default Login;
