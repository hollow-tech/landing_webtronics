import { FC } from "react";
import styles from "./background.module.css";

export const TechnologiesBG: FC = () => {
  return (
    <div className={styles.section_background}>
      <div className={styles.background_spot} style={{ bottom: "-50px", left: "-150px" }}></div>
      <div className={styles[`background_star big`]} style={{ top: "0", right: "0" }}></div>
    </div>
  );
};
