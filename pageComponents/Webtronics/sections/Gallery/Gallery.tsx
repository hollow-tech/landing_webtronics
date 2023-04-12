import { FC } from "react";
import { GalleryBG } from "./GalleryBG";

import styles from "./Gallery.module.css";

export const Gallery: FC = () => {
  return (
    <div className={styles[`gallery`]} id="gallery_section">
      <GalleryBG />
      <h2>Gallery</h2>
      <div className={styles.gallery_content}>
        <p className={styles.gallery_text}>
          By the end of this course, you will be able to develop and publish your very own Google
          Chrome extension! In this course we will focus on coding exercises and projects.
        </p>
        <div
          className={`${styles.gallery_photo} ${styles.horizontal}`}
          style={{ backgroundImage: `url("/content/photos/photo_7.jpg")` }}
        ></div>
        <div
          className={styles.gallery_photo}
          style={{ backgroundImage: `url("/content/photos/photo_8.jpg")` }}
        ></div>
        <div
          className={styles.gallery_photo}
          style={{ backgroundImage: `url("/content/photos/photo_9.jpg")` }}
        ></div>
        <div
          className={`${styles.gallery_photo} ${styles.vertical}`}
          style={{ backgroundImage: `url("/content/photos/photo_10.jpg")` }}
        ></div>
        <p className={`${styles.gallery_text} ${styles.wide}`}>
          If you would like to learn web development and get a job in the tech industry, you are
          going to LOVE this course! Learn HTML, CSS, JavaScript, Bootstrap and more with over 15
          hours of HD video tutorials! This course was designed to be extremely beginner friendly.
          We will begin with the very basics of HTML and build a simple web page.
        </p>
      </div>
    </div>
  );
};
