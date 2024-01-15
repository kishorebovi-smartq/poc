import React from "react";
import styles from "./style.module.scss";
import LandingImage from "./assets/landingImage.avif";
import Cards  from "./cards";

const LandingPageView = ({cardData, loginClickHandler}) => {
  return (
    <div className={styles.landing}>
      <div className={styles.header}>
        <h1>
          <span>My</span>
          <span className={styles.blueText}>Jobs</span>
        </h1>
        <button className={styles.loginButton}>Login/SignUp</button>
      </div>
      <div className={styles.content}>
        <div className={styles.heading}>
          <div>
            <h1>Welcome to</h1>
            <h1>
              <span>My</span>
              <span className={styles.blueText}>Jobs</span>
            </h1>
            <button onClick={loginClickHandler} >Get Started</button>
          </div>
          <div>
            <img src={LandingImage} alt="dummy" width="550px" height="300px" />
          </div>
        </div>
        <div>
          <h1>Why Us</h1>
          <Cards data={cardData} />
        </div>
      </div>
    </div>
  );
};

export default LandingPageView;
