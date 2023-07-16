import React, { useState } from "react";
import styles from "./QuestionTenSlide.module.css";

const QuestionTenSlide = () => {
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
        The process of converting a high-level programming language into machine
        code is called ________.
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

export default QuestionTenSlide;
