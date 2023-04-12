import React from "react";
import styles from "./Title.module.css";
import { Button } from "../../../../components";

export const Title: React.FC = () => {
  return (
    <div className={styles[`title`]}>
      <div className={styles.title_content}>
        <h1 className={styles.text_frontend}>Front-End</h1>
        <p className={styles.title_content_text}>
          Make UIs and websites beautiful, functional, and fast. Cover all the topics that expensive
          bootcamps teach (and more).
        </p>
        <Button content="Start my career change" />
        <h1 className={styles.text_developer}>Developer</h1>
        <h3 className={styles.text_courses}>Courses</h3>
      </div>
    </div>
  );
};
