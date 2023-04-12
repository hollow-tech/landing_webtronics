import React from "react";
import { ArrowProps, Directions } from "./Arrow.types";
import styles from "./Arrow.module.css";

export const Arrow: React.FC<ArrowProps> = ({ direction, change }) => {
  return (
    <div className={styles.arrow_wrapper}>
      <button
        className={styles.arrow_button}
        onClick={() => {
          change(direction === "right" ? Directions.Right : Directions.Left);
        }}
      >
        <span className={styles.arrow_button_sign}>{direction === "right" ? ">" : "<"}</span>
      </button>
    </div>
  );
};
