import React from "react";

import styles from "./Input.module.css";

import { InputProps } from "./Input.types";

export const Input: React.FC<InputProps> = ({
  placeholder,
  disabled = false,
  error = false,
  register,
  value,
}) => {
  return (
    <div className={`${styles.input_wrapper} ${styles[`${error ? "error" : ""}`]}`}>
      <input
        type="text"
        className={styles.custom_input}
        placeholder={placeholder}
        disabled={disabled}
        {...register(value, { required: true })}
      />
    </div>
  );
};
