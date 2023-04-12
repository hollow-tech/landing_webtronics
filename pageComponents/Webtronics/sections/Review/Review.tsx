import { FC, useState } from "react";
import { IPerson, Directions } from "./Review.types";



import styles from "./Review.module.css";
import { ReviewBG } from "./ReviewBG";
import { Arrow, Person } from "../../../../components";

const persons: Array<IPerson> = [
  {
    id: 1,
    main_photo: "/content/photos/photo_4.jpg",
    alt_photo: "/content/photos/photo_4_alt.jpg",
    title: "Best courses ever",
    description:
      'Good course, up to this point, still ongoing. The only downside, why I gave 4,5 stars, because the "teacher" sometimes feel like, he is lost, and takes up quite a time, to correct himself, and check back etc.',
  },
  {
    id: 2,
    main_photo: "/content/photos/photo_5.jpg",
    alt_photo: "/content/photos/photo_5_alt.jpg",
    title: "Amazing teaching",
    description:
      "The explanation is crazy it really doesn't have a structure to go from point A to point B. He starts to explain something then he change his mind and start with another thing an so on. If you try to learn pro active by doing the same thing with him all along you will get confused and start to loose interest.",
  },
  {
    id: 3,
    main_photo: "/content/photos/photo_6.jpg",
    alt_photo: "/content/photos/photo_6_alt.jpg",
    title: "Simple and easy",
    description:
      "I am really enjoying the experience of learning a new skill I used to believe that web design was way too complicated for me to learn but so far in this course I have been keeping up and having fun.",
  },
];

export const Review: FC = () => {
  const [current, setCurrent] = useState<number>(1);
  const [title, setTitle] = useState<string>(persons[0].title);
  const [description, setDescription] = useState<string>(persons[0].description);

  const changeCurrent = (value: Directions) => {
    let temp = current;

    if (value === "right") {
      if (temp >= 3) return;
      temp++;
    } else {
      if (temp <= 1) return;
      temp--;
    }

    setCurrent(temp);
    setTitle(persons[temp - 1].title);
    setDescription(persons[temp - 1].description);
  };

  return (
    <div className={styles[`review`]} id="review_section">
      <ReviewBG />
      <h2>Review</h2>

      <div className={styles.review_content}>
        <div className={styles.review_description}>
          <h4>{title}</h4>
          <p className={styles.review_description_text}>{description}</p>
        </div>

        <div className={styles.review_persons}>
          <div className={styles.review_persons_control}>
            <div className={styles.review_persons_number}>
              <span className={styles.current}>{current}/</span>
              <span className={styles.all}>3</span>
            </div>
            <Arrow direction={Directions.Left} change={changeCurrent} />
            <Arrow direction={Directions.Right} change={changeCurrent} />
          </div>

          <div className={styles.review_persons_list}>
            <Person
              main_photo={persons[0].main_photo}
              alt_photo={persons[0].alt_photo}
              selected={current === 1 ? true : false}
            />
            <Person
              main_photo={persons[1].main_photo}
              alt_photo={persons[1].alt_photo}
              selected={current === 2 ? true : false}
            />
            <Person
              main_photo={persons[2].main_photo}
              alt_photo={persons[2].alt_photo}
              selected={current === 3 ? true : false}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
