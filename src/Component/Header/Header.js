import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import classes from "./Header.module.css";

const Header = () => {
  //   const [show, handleShow] = useState(false);
  //   useEffect(() => {
  //     window.addEventListener("scroll", () => {
  //       if (window.scrollY > 100) {
  //         handleShow(true);
  //       } else handleShow(false);
  //     });
  //     return () => {
  //       window.removeEventListener("scroll");
  //     };
  //   }, []);

  return (
    <div className={classes.backGroundImage}>
      <div className={classes.nav}>
        <img
          className={classes["nav__logo"]}
          src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/12c6f684-d447-4457-84fa-12033cfd581e/d9z3o32-2c299a83-49a9-44c2-bc23-b0b5070a546b.png/v1/fill/w_1024,h_512,strp/netflix_logo_background__2_by_sixmonthslate_d9z3o32-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3siaGVpZ2h0IjoiPD01MTIiLCJwYXRoIjoiXC9mXC8xMmM2ZjY4NC1kNDQ3LTQ0NTctODRmYS0xMjAzM2NmZDU4MWVcL2Q5ejNvMzItMmMyOTlhODMtNDlhOS00NGMyLWJjMjMtYjBiNTA3MGE1NDZiLnBuZyIsIndpZHRoIjoiPD0xMDI0In1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.WKy-rj_8y7ziLuhhtAES7jddy-eUpz6PQQ331bp7rRI"
          alt="Netflix Logo"
        />
        <div className={classes["nav__avatar"]}>
          <select>
            <option>English</option>
            <option>Spanish</option>
          </select>
          <button className={classes.button}>
            {" "}
            <Link style={{ textDecoration: "none" }} to="SignInPage">
              {" "}
              Sign In{" "}
            </Link>
          </button>
        </div>
      </div>
      <div>
        <h1 className={classes.unlimited}>
          Unlimited movies, TV shows and more.
        </h1>
        <h2 className={classes.para}>Watch anywhere. cancel any time.</h2>
        <h2 className={classes.para}>
          Read to watch.Enter your email to create or restart your membership
        </h2>
        <div className={classes["input-button"]}>
          <input
            className={classes.input}
            type="email"
            required
            placeholder="Email address"
          />

          <button className={classes.start}>
            {" "}
            <Link to="signUp" style={{ textDecoration: "none" }}>
              Get Started
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
