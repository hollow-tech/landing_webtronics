import React from "react";
import styles from "./background.module.css";

export const GalleryBG: React.FC = () => {
  return (
    <div className={styles.section_background}>
      <div className={styles.background_spot} style={{ bottom: "-100px", left: "-15%" }}></div>
      <div className={styles.background_spot} style={{ bottom: "-320px", right: "-17%" }}></div>

      <div
        className={`${styles.background_star} ${styles.big}`}
        style={{ bottom: "120px", right: "25%" }}
      ></div>
      <div
        className={`${styles.background_star} ${styles.small}`}
        style={{ bottom: "-50px", right: "40%" }}
      ></div>
      <div
        className={`${styles.background_star} ${styles.small}`}
        style={{ bottom: "-120px", left: "20%" }}
      ></div>
    </div>
  );
};
