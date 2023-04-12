import React from "react";
import styles from "./Mentor.module.css";
import { MentorProps } from "./Mentor.types";
import Image from "next/image";
import { borderRadius } from "polished";

const Mentor: React.FC<MentorProps> = ({ photo, name, post }) => {
  return (
    <div className={styles.mentor}>
      <div className={styles.mentor_photo_wrapper}>
        <Image
          src={photo}
          alt="mentor"
          style={{ objectFit: "cover", borderRadius: "50%" }}
          height={190}
          width={190}
        />
      </div>
      <h4 className={styles.mentor_name}>{name}</h4>
      <p className={styles.mentor_post}>{post}</p>
    </div>
  );
};

export default Mentor;
