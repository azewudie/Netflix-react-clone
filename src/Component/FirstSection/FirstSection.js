import React from "react";
import Mobile from "../assets/Images/home/mobile.jpg";
import Boxshot from "../assets/Images/home/boxshot.png";
import DownloadIcon from "../assets/Images/icon/download-icon.gif";
import classes from "./FirstSection.module.css";
const FirstSection = () => {
  return (
    <section className={classes["outer-container"]}>
      <div className={classes["internal-wrapper"]}>
        <div className={classes["left-text-wrapper"]}>
          <h1>Download your shows to watch offline.</h1>
          <h2>
            Save your favorites easily and always have something to watch.
          </h2>
        </div>
        <div className={classes["phone-image-wrapper"]}>
          <img src={Mobile} alt="watch moveis in your phone" />
          <div className={classes["downloading-wrapper"]}>
            <div className={classes["book-image-wrapper"]}>
              <img src={Boxshot} alt="boxshot" />
            </div>
            <div className={classes["text-wrapper"]}>
              <div className={classes["stranger-text-wrapper"]}>
                Stranger Things
              </div>
              <div className={classes["download-text-wrapper"]}>
                Downloading...
              </div>
            </div>
            <div className={classes["download-sign-wrapper"]}>
              <img src={DownloadIcon} alt="download button" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default FirstSection;
