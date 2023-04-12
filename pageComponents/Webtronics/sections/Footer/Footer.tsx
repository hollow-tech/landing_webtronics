import React from "react";
import { Logo } from "../../../../components";
import styles from "./Footer.module.css";
export const Footer: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.footer_wrapper}>
        <footer className={styles.footer}>
          <div className={styles[`footer_content`]}>
            <div className={styles.footer_address}>
              <Logo />
              <p className={styles.footer_address_text}>
                Wisconsin Ave, Suite 700
                <br />
                Chevy Chase, Maryland 20815
              </p>
            </div>

            <div className={styles.footer_company}>
              <span className={styles.footer_title}>Company</span>
              <ul className={styles.footer_company_links}>
                <li className={styles.company_link}>
                  <a href="#about_section">About Us</a>
                </li>
                <li className={styles.company_link}>
                  <a href="#review_section">Review</a>
                </li>
                <li className={styles.company_link}>
                  <a href="#steps_section">Steps</a>
                </li>
                <li className={styles.company_link}>
                  <a href="#gallery_section">Gallery</a>
                </li>
                <li className={styles.company_link}>
                  <a href="#">FAQs</a>
                </li>
              </ul>
            </div>

            <div className={styles.footer_social}>
              <span className={styles.footer_title}>Social media</span>
              <ul className={styles.footer_social_links}>
                <li className={styles.social_link}>
                  <a href="#">
                    <img src={"/content/footer/icons/icon_1.svg"} alt="social icon" height="24" />
                  </a>
                </li>
                <li className={styles.social_link}>
                  <a href="#">
                    <img src={"/content/footer/icons/icon_2.svg"} alt="social icon" height="24" />
                  </a>
                </li>
                <li className={styles.social_link}>
                  <a href="#">
                    <img src={"/content/footer/icons/icon_3.svg"} alt="social icon" height="24" />
                  </a>
                </li>
                <li className={styles.social_link}>
                  <a href="#">
                    <img src={"/content/footer/icons/icon_4.svg"} alt="social icon" height="24" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};
