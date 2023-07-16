import React, { useState } from "react";
import styles from "./QuestionSevenSlide.module.css";

const QuestionSevenSlide = () => {
  const [answer, setAnswer] = useState("");

  const handleInputChange = (event) => {
    setAnswer(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle the submitted answer here
  };

  return (
    <div className={styles.slide}>
      <p className={styles.question}>
        The primary colors in painting are red, blue, and ________.
      </p>
      <form onSubmit={handleSubmit}>
        <input
          className={styles.input}
          type="text"
          value={answer}
          onChange={handleInputChange}
        />
        <button type="submit" className={styles.submitButton}>
          Next
        </button>
      </form>
    </div>
  );
};

export default QuestionSevenSlide;
