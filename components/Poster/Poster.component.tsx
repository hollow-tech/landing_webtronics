import React from "react";
import styles from "./Poster.module.css";

export const Poster: React.FC = () => {
  return (
    <div className={styles.poster}>
      <div className={styles.background_spot} style={{ bottom: "-100px", left: "10vw" }}></div>
      <div className={styles.background_spot} style={{ bottom: "50px", right: "5vw" }}></div>
    </div>
  );
};
