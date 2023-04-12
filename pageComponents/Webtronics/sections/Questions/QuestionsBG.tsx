import React from "react";
import styles from "./background.module.css";

export const QuestionsBG: React.FC = () => {
  return (
    <div className={styles.section_background}>
      <div className={styles.background_spot} style={{ top: "0", right: "-200px" }}></div>
      <div
        className={`${styles.background_star} ${styles.medium}`}
        style={{ bottom: "180px", left: "8%" }}
      ></div>
      <div
        className={`${styles.background_star} ${styles.small}`}
        style={{ bottom: "-20px", right: "35%" }}
      ></div>
    </div>
  );
};
