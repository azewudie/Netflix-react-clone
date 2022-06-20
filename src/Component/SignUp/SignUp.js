import React from "react";
import "./SignUp.css";
const SignUp = () => {
  return (
    <div className="signupForm">
      <div></div>

      <div className="signUpForm-wrapper">
        <form className="signUp-form-wrapper">
          <input
            className="signUpData-wrapper"
            type="email"
            required
            placeholder="Email Address "
          ></input>
          <br></br>
          <input
            className="signUpData-wrapper"
            type="password"
            required
            placeHolder="Password"
          ></input>
          <br></br>
          <button className="signUpForm-button" type="submit">
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
