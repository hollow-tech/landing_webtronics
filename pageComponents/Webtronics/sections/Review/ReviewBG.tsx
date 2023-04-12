import React from "react";
import styles from "./background.module.css";

export const ReviewBG: React.FC = () => {
  return (
    <div className={styles.section_background}>
      <div className={styles.background_spot} style={{ top: "-150px", left: "-5%" }}></div>
      <div className={styles.background_spot} style={{ top: "100px", right: "-20%" }}></div>
      <div
        className={`${styles.background_star} ${styles.medium}`}
        style={{ top: "300px", right: "-7%" }}
      ></div>
    </div>
  );
};
