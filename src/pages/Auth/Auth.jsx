/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { Link } from "react-router-dom";
// import Layout from "../../components/Layout/Layout";
import classes from "./Auth.module.css";
import { auth } from "../../Utility/firebase";
function Auth() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  // console.log(email, password);

  const authHandler = (e) => {
    e.preventDefault();
    console.log(e.target.name);
  }
  return (
    <>
      <section className={classes.login}>
        {/* Logo */}
        <Link>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1206px-Amazon_logo.svg.png"
            alt=""
          />
        </Link>

        {/* login */}

        <div className={classes.login_Container}>
          <h1>Sign In</h1>

          <form action="">
            <div>
              <label htmlFor="email">Email:</label>

              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                id="email"
              />
            </div>
            <div>
              <label htmlFor="password">Password:</label>

              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                id="password"
              />
            </div>
            <button type="submit" name="signin" onClick={authHandler()} className={classes.SignIn_button}>Sign In</button>
            {/* Service agreement */}

            <p>
              By signing-in you agree to the{" "}
              <span style={{ fontWeight: "semibold", color: "black" }}>
                AMAZON FAKE CLONE
              </span>{" "}
              Conditions of Use & Sale. Please see our Privacy Notice, our
              Cookies Notice and our Interest-Based Ads Notice.
            </p>

            {/* Create new account */}
            <button type="submit"  name="signup" onClick={authHandler()} className={classes.SignUp_button}>
              Create your Amazon account
            </button>
          </form>
        </div>
      </section>
    </>
  );

  // const [isLogin, setIsLogin] = useState(true);

  //   // Toggle between Sign In and Sign Up
  //   const toggleForm = () => {
  //     setIsLogin(!isLogin);
  //   };

  // return (
  //   <>      <section className={styles.login}>
  //        {/* Logo */}
  //        <Link>
  //          <img
  //           src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1206px-Amazon_logo.svg.png"
  //           alt=""
  //         />
  //       </Link>
  //     </section>
  //   <div className={styles.container}>
  //     <h1>{isLogin ? 'Sign In to Your Account' : 'Create Account'}</h1>

  //     {isLogin ? (
  //       <form className={styles.authForm}>
  //         <label>Email:</label>
  //         <input type="email" placeholder="Enter your email" required />

  //         <label>Password:</label>
  //         <input type="password" placeholder="Enter your password" required />

  //         <button type="submit" className={styles.btn}>Sign In</button>

  //         <p>
  //           By continuing, you agree to Amazons Conditions of Use and Privacy Notice.
  //         </p>
  //         <hr />
  //         <button onClick={toggleForm} className={styles.toggleBtn}>
  //           Create your Amazon account
  //         </button>
  //       </form>
  //     ) : (
  //       <form className={styles.authForm}>
  //         <label>Name:</label>
  //         <input type="text" placeholder="Enter your name" required />

  //         <label>Email:</label>
  //         <input type="email" placeholder="Enter your email" required />

  //         <label>Password:</label>
  //         <input type="password" placeholder="Enter your password" required />

  //         <label>Re-enter Password:</label>
  //         <input type="password" placeholder="Re-enter your password" required />

  //         <button type="submit" className={styles.btn}>Create Account</button>
  //         <hr />
  //         <button onClick={toggleForm} className={styles.toggleBtn}>
  //           Already have an account? Sign in
  //         </button>
  //       </form>
  //     )}
  //   </div>
  //   </>
  // );
}

export default Auth;
