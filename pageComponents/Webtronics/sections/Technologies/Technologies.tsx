import { FC } from "react";
import { TechnologiesBG } from "./TechnologiesBG";
import styles from "./Technologies.module.css";
import { Stack } from "../../../../components";

export const Technologies: FC = () => {
  return (
    <div className={styles[`technologies`]} id="technologies_section">
      <TechnologiesBG />
      <h2 className={styles.title}>
        Programming
        <br />
        technologies
      </h2>
      <p className={styles.technologies_text}>
        By the end, you’ll have the portfolio and interview skills you need to start your new
        career.
      </p>

      <Stack />
    </div>
  );
};
