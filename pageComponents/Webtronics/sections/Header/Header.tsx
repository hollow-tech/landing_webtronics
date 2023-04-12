import React from "react";

import styles from "./Header.module.css";
import { Logo } from "../../../../components";

export const Header: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState(true);

  const handleToggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className={styles[`header`]}>
      <div className={styles.logo}>
        <Logo />
      </div>
      <nav
        className={`${styles.header_links}`}
        style={{ left: `${!isOpen ? "0" : "-100%"}` }}
      >
        <a href="#about_section" className={styles.header_links_item}>
          About
        </a>
        <a href="#technologies_section" className={styles.header_links_item}>
          Programms
        </a>
        <a href="#steps_section" className={styles.header_links_item}>
          Steps
        </a>
        <a href="#questions_section" className={styles.header_links_item}>
          Questions
        </a>
        <a href="#contact_section" className={styles.header_links_item}>
          Get in touch
        </a>
      </nav>

      <div
        className={`${styles["burger-menu"]} ${!isOpen ? styles["burger-menu--open"] : ""}`}
        onClick={handleToggleMenu}
      >
        <div className={`${styles["burger-menu__line"]} ${styles["burger-menu__line--top"]}`} />
        <div className={`${styles["burger-menu__line"]} ${styles["burger-menu__line--middle"]}`} />
        <div className={`${styles["burger-menu__line"]} ${styles["burger-menu__line--bottom"]}`} />
      </div>
    </header>
  );
};
