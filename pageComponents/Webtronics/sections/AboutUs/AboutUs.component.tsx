import React from "react";
import photo_1 from "public/content/photos/photo_1.jpg";
import photo_2 from "public/content/photos/photo_2.jpg";
import photo_3 from "public/content/photos/photo_3.jpg";
import { AboutUsBG } from "./AboutUsBG";
import styles from "./AboutUs.module.css";
import Mentor from "../../../../components/Mentor/Mentor.component";

export const AboutUs: React.FC = () => {
  return (
    <div className={styles[`about_us`]} id="about_section">
      <AboutUsBG />
      <h2 className={styles.title}>About Us</h2>

      <div className={styles.about_us_content}>
        <div className={styles.about_us_mentors}>
          <h3 className={styles.about_us_mentors_title}>Mentors</h3>
          <div className={styles.about_us_mentors_list}>
            <Mentor
              photo={photo_1}
              name={"Wade Warren"}
              post={"Front-end engineers work closely with designers"}
            />
            <Mentor
              photo={photo_2}
              name={"Kristin Watson"}
              post={"Front-end engineers work closely with designers"}
            />
            <Mentor
              photo={photo_3}
              name={"Robert Fox"}
              post={"Front-end engineers work closely with designers"}
            />
          </div>
        </div>
        <p className={styles.about_us_text}>
          Front-end engineers work closely with designers to make websites beautiful, functional,
          and fast. This Career Path will teach you not only the necessary languages and
          technologies, but how to think like a front-end engineer, too.
        </p>
      </div>
    </div>
  );
};
