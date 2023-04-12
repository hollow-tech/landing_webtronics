import React from "react";
import styles from "./background.module.css";

export const StepsBG: React.FC = () => {
  return (
    <div className={styles.section_background}>
      <div className={styles.background_spot} style={{ top: "25%", left: "-100px" }}></div>

      <div
        className={`${styles.background_star} ${styles.medium}`}
        style={{ top: "0", left: "20%" }}
      ></div>
      <div
        className={`${styles.background_star} ${styles.small}`}
        style={{ top: "450px", left: "5%" }}
      ></div>
      <div
        className={`${styles.background_star} ${styles.medium}`}
        style={{ top: "460px", right: "-50px" }}
      ></div>
      <div
        className={`${styles.background_star} ${styles.small}`}
        style={{ top: "600px", right: "30%" }}
      ></div>
      <div
        className={`${styles.background_star} ${styles.small}`}
        style={{ top: "900px", right: "10%" }}
      ></div>
    </div>
  );
};
