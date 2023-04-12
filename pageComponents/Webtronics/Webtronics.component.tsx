import React from "react";
import { Poster } from "../../components/Poster/Poster.component";

import {
  AboutUs,
  ContactUs,
  Footer,
  Gallery,
  Header,
  Questions,
  Review,
  Steps,
  Technologies,
  Title,
} from "./sections";

import styles from "./Webtronics.module.css";

const Webtronics: React.FC = () => {
  return (
    <div className={styles.app}>
      <div className={styles.wrapper}>
        <Poster />
        <Header />
        <main>
          <Title />
          <AboutUs />
          <Technologies />
          <Steps />
          <Questions />
          <Review />
          <Gallery />
          <ContactUs />
        </main>
      </div>
      <Footer />
    </div>
  );
};
export default Webtronics;
