import React from "react";

import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
      <a className={styles.contactBtn}  href="mailto:harshlaugale@gmail.com">Mail Me !</a>
        <p>Feel free to reach out on other socials !</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
          <a href="mailto:harshlaugale@gmail.com">harshlaugale@gmail.com</a>
        </li>
        <li className={styles.link}>
          <img
            src={getImageUrl("contact/linkedinIcon.png")}
            alt="LinkedIn icon"
          />
          <a href="https://www.linkedin.com/in/harshla-ugale/">linkedin.com/harshla-ugale</a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/githubIcon.png")} alt="Github icon" />
          <a href="https://www.github.com/harshlaugale">github.com/harshlaugale</a>
        </li>
      </ul>
    </footer>
  );
};