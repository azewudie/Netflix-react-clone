import React from "react";
import { Link } from "react-router-dom";
import "./SignInPage.css";
const SignInPage = () => {
  return (
    <div className="signIn">
      <div>
        <img
          className="navLogo"
          src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/12c6f684-d447-4457-84fa-12033cfd581e/d9z3o32-2c299a83-49a9-44c2-bc23-b0b5070a546b.png/v1/fill/w_1024,h_512,strp/netflix_logo_background__2_by_sixmonthslate_d9z3o32-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3siaGVpZ2h0IjoiPD01MTIiLCJwYXRoIjoiXC9mXC8xMmM2ZjY4NC1kNDQ3LTQ0NTctODRmYS0xMjAzM2NmZDU4MWVcL2Q5ejNvMzItMmMyOTlhODMtNDlhOS00NGMyLWJjMjMtYjBiNTA3MGE1NDZiLnBuZyIsIndpZHRoIjoiPD0xMDI0In1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.WKy-rj_8y7ziLuhhtAES7jddy-eUpz6PQQ331bp7rRI"
          alt="Netflix Logo"
        />
      </div>
      <br></br>
      <br></br>
      <br></br>
      <div className="form-wrapper">
        <div className="form-outSide-wrapper">
          <div className="form-internal-wrapper">
            <h1 className="signIn-wrapper"> Sign In </h1>
            <form>
              <input
                className="fromInput-wrapper"
                type="email"
                placeholder="Email address"
                required
              />
              <br></br>
              <input
                className="fromInput-wrapper"
                type="password"
                placeholder="Password"
                required
              />
              <br></br>
              <button className="submit-wrapper" type="submit">
                Sign In
              </button>
            </form>
            <div className="Info-wrapper">
              <p>
                New to Netflix?{" "}
                <Link to="/SignUp" style={{ color: "red" }}>
                  Sign Up Now
                </Link>{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="SignInFooter-wrapper">
        <p>Questions? call 1-844-505-2993</p>
        <div className="SignInFooter-internal-wrapper">
          <ul className="SignInFooter-list">
            <li>
              <a href="#">FAQ </a>
            </li>
            <li>
              <a href="#">Help Center </a>
            </li>
            <li>
              <a href="#">Terms of Use </a>
            </li>
            <li>
              <a href="#">Privacy </a>
            </li>
            <li>
              <a href="#">Cookie Performance </a>
            </li>
            <li>
              <a href="#"> Corporate Information </a>
            </li>
          </ul>
        </div>
        <div className="SignFooterOption">
          <select>
            <option>English</option>
            <option>Spanish</option>
          </select>
        </div>
      </div>
    </div>
  );
};
export default SignInPage;
