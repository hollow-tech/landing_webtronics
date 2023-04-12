import React from "react";
import styles from "./Person.module.css";
import { PersonProps } from "./Person.types";
import { backgroundImages } from "polished";

export const Person: React.FC<PersonProps> = ({ main_photo, alt_photo, selected = false }) => {
  return (
    <div className={`${styles.person} ${styles[`${selected ? "selected" : ""}`]}`}>
      <div className={styles.person_image}>
        <img
          src={`${selected ? main_photo : alt_photo}`}
          alt="asdasd"
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </div>
    </div>
  );
};
