import { FC } from "react";
import Image from "next/image";
import { QuestionsBG } from "./QuestionsBG";
import { QuestionItem } from "../../../../components";

import styles from "./Questions.module.css";
export const Questions: FC = () => {
  return (
    <div className={styles[`questions`]} id="questions_section">
      <QuestionsBG />
      <h2 className={styles.title}>
        Frequently Asked
        <br />
        Questions
      </h2>

      <div className={styles.questions_content}>
        <p className={styles.questions_text}>
          Do you have any kind of questions?
          <br />
          We are here to help.
        </p>

        <div className={styles.questions_list}>
          <QuestionItem
            title={"What is the price?"}
            description={
              "Front-end engineers work closely with designers to make websites beautiful, functional, and fast. This Career Path will teach you not only the necessary languages and technologies, but how to think like a front-end engineer, too."
            }
            open={true}
          />
          <QuestionItem
            title={"What is the price?"}
            description={
              "Front-end engineers work closely with designers to make websites beautiful, functional, and fast. This Career Path will teach you not only the necessary languages and technologies, but how to think like a front-end engineer, too."
            }
          />
          <QuestionItem
            title={"What is the price?"}
            description={
              "Front-end engineers work closely with designers to make websites beautiful, functional, and fast. This Career Path will teach you not only the necessary languages and technologies, but how to think like a front-end engineer, too."
            }
          />
          <QuestionItem
            title={"What is the price?"}
            description={
              "Front-end engineers work closely with designers to make websites beautiful, functional, and fast. This Career Path will teach you not only the necessary languages and technologies, but how to think like a front-end engineer, too."
            }
          />
          <QuestionItem
            title={"What is the price?"}
            description={
              "Front-end engineers work closely with designers to make websites beautiful, functional, and fast. This Career Path will teach you not only the necessary languages and technologies, but how to think like a front-end engineer, too."
            }
          />
        </div>

        <div className={styles.questions_mark}>
          <Image
            src="/content/background/question_mark.png"
            alt="questions mark"
            style={{ objectFit: "cover", filter: "drop-shadow(0 0 15px rgba(156, 55, 253))" }}
            width="345"
            height="405"
          />
        </div>
      </div>
    </div>
  );
};
