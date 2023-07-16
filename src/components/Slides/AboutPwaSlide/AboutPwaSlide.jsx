import React from "react";
import styles from "./AboutPwaSlide.module.css";

const AboutPwaSlide = () => {
  return (
    <div className={styles.slide}>
      <p className={styles.description}>
        Welcome to the Random Questions PWA! This Progressive Web App (PWA) is
        designed to provide you with a fun and interactive quiz experience. It
        presents a series of random questions, allowing you to test your
        knowledge on various topics.
      </p>
      <p className={styles.note}>
        Note: You have the flexibility to customize the questions to suit your
        preferences or the specific theme you want. Feel free to modify the
        questions and make it about whatever you like!
      </p>
    </div>
  );
};

export default AboutPwaSlide;
