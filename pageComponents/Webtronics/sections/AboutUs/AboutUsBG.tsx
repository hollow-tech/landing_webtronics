import React from "react";
import styles from "./background.module.css";

export const AboutUsBG: React.FC = () => {
  return (
    <div className={styles.section_background}>
      <div className={styles.background_spot} style={{ bottom: "-100px", right: "-200px" }}></div>

      <span className={styles.background_text}>Front-End</span>

      <div
        className={`${styles.background_star} ${styles.medium}`}
        style={{ top: "40px", left: "20%" }}
      ></div>
      <div
        className={`${styles.background_star} ${styles.small}`}
        style={{ top: "-10px", left: "50%" }}
      ></div>
      <div
        className={`${styles.background_star} ${styles.small}`}
        style={{ top: "0", right: "27%" }}
      ></div>
      <div
        className={`${styles.background_star} ${styles.big}`}
        style={{ top: "0", right: "0" }}
      ></div>
      <div
        className={`${styles.background_star} ${styles.medium}`}
        style={{ top: "400px", left: "5%" }}
      ></div>
      <div
        className={`${styles.background_star} ${styles.small}`}
        style={{ bottom: "250px", right: "30%" }}
      ></div>
      <div
        className={`${styles.background_star} ${styles.small}`}
        style={{ bottom: "70px", right: "20%" }}
      ></div>
    </div>
  );
};
