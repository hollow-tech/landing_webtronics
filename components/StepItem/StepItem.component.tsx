import React from "react";
import styles from "./StepItem.module.css";
import { StepItemProps, Directions } from "./StepItem.types";

export const StepItem: React.FC<StepItemProps> = ({ direction, number, title, description }) => {
  return (
    <div className={`${styles.step_item} ${styles[`${direction}`]}`}>
      <div className={styles.step_item_wrapper}>
        <div className={styles.step_item_content}>
          <h4>Step {number}</h4>
          <h3>{title}</h3>
          <p className={styles.step_item_description}>{description}</p>
        </div>
      </div>
    </div>
  );
};
