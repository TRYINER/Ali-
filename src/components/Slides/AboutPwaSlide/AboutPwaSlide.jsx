import React from "react";
import styles from "./AboutPwaSlide.module.css";
import SlideContainer from "../../SlideContainer/SlideContainer";
import Button from "../../Button/Button";

const AboutPwaSlide = ({ onNext }) => {
  return (
    <SlideContainer>
      <p className={styles.description}>
        Welcome to Summer Hackathon PWA! This Progressive Web App (PWA) is a fun
        and interactive quiz experience.
      </p>
      <p className={styles.description}>
        Note: Customize the questions to suit your preferences or specific
        themes. Feel free to modify the code and make it about whatever you
        like!
      </p>

      <Button onClick={onNext}>Next</Button>
    </SlideContainer>
  );
};

export default AboutPwaSlide;
