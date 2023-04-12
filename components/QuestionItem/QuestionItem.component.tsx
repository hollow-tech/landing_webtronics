import React from "react";
import styles from "./QuestionItem.module.css";
import { QuestionItemProps } from "./QuestionItem.types";

export const QuestionItem: React.FC<QuestionItemProps> = ({ title, description, open = false }) => {
  const [closed, setClosed] = React.useState<boolean>(!open);

  return (
    <div className={`${styles.question_item} ${styles[`${closed ? "closed" : ""}`]}`}>
      <div className={styles.question_item_content}>
        <h4>{title}</h4>
        <p className={styles.question_item_description}>{description}</p>
        <button
          className={styles.question_item_switcher}
          onClick={() => {
            setClosed(!closed);
          }}
        >
          {closed ? "+" : "-"}
        </button>
      </div>
    </div>
  );
};
