import React from "react";
import styles from "./style.module.scss";
const LandingPageCard = ({ cardTitle = "", cardDescription = "" }) => {
  return (
    <div className={styles.card}>
      <div className={styles.title}>{cardTitle}</div>
      <div className={styles.description}>{cardDescription}</div>
    </div>
  );
};

export default LandingPageCard;
