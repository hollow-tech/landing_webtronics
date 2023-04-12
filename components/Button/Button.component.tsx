import React from "react";
import { ButtonProps, ButtonTypes } from "./Button.types";
import styles from "./Button.module.css";

export const Button: React.FC<ButtonProps> = ({
  content,
  type = ButtonTypes.Standard,
  disabled = false,
}) => {
  return (
    <button className={styles.custom_button} disabled={disabled} type={type}>
      {content}
    </button>
  );
};
