import React from "react";

import Kides from "../assets/kidsValueProp.png";

import classes from "./SecondSection.module.css";
const SecondSection = () => {
  return (
    <section className={classes["outer-container"]}>
      <div className={classes["internal-wrapper"]}>
        <div className={classes["phone-image-wrapper"]}>
          <img src={Kides} alt="watch moveis in your phone" />
        </div>
        <div className={classes["left-text-wrapper"]}>
          <h1>Create A profile for kids.</h1>
          <h2>
            Send kids on adventures with their favorite character's in space
            made just for them--free with your membership
          </h2>
        </div>
      </div>
    </section>
  );
};
export default SecondSection;
