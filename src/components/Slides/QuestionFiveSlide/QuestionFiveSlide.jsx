import React, { useState } from "react";
import styles from "./QuestionFiveSlide.module.css";

const QuestionFiveSlide = ({ onNext, handleAnswerSubmit }) => {
  const [answer, setAnswer] = useState("");

  const handleInputChange = (event) => {
    setAnswer(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    handleAnswerSubmit(answer, "4");

    onNext();
    // Handle the submitted answer here
  };

  return (
    <div className={styles.slide}>
      <p className={styles.question}>Find the value of y: 2y + 5 = 13.</p>
      <form onSubmit={handleSubmit}>
        <input
          className={styles.input}
          type="number"
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

export default QuestionFiveSlide;
