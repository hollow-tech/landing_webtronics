import React from "react";
import { Directions } from "./Steps.types";
import styles from "./Steps.module.css";
import { StepsBG } from "./StepsBG";
import { StepItem } from "../../../../components";

export const Steps: React.FC = () => {
  return (
    <div className={`${styles.steps}`} id="steps_section">
      <StepsBG />
      <h2>Steps</h2>

      <div className={styles.steps_tree}>
        <div className={styles.steps_scale}></div>
        <StepItem
          direction={Directions.Left}
          number={1}
          title={"Introduction to Front-End"}
          description={
            "Lorem ipsum dolor sit amet consectetur. Elit massa erat vitae non semper quis."
          }
        />

        <StepItem
          direction={Directions.Right}
          number={2}
          title={"Overview of Development"}
          description={
            "Lorem ipsum dolor sit amet consectetur. Elit massa erat vitae non semper quis."
          }
        />

        <StepItem
          direction={Directions.Left}
          number={3}
          title={"Introduction to Front-End"}
          description={
            "Lorem ipsum dolor sit amet consectetur. Elit massa erat vitae non semper quis."
          }
        />

        <StepItem
          direction={Directions.Right}
          number={4}
          title={"Overview of Development"}
          description={
            "Lorem ipsum dolor sit amet consectetur. Elit massa erat vitae non semper quis."
          }
        />

        <StepItem
          direction={Directions.Left}
          number={5}
          title={"Introduction to Front-End"}
          description={
            "Lorem ipsum dolor sit amet consectetur. Elit massa erat vitae non semper quis."
          }
        />

        <StepItem
          direction={Directions.Right}
          number={6}
          title={"Overview of Development"}
          description={
            "Lorem ipsum dolor sit amet consectetur. Elit massa erat vitae non semper quis."
          }
        />
      </div>
    </div>
  );
};
