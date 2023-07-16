import React, { useState } from "react";
import styles from "./QuestionThreeSlide.module.css";

const QuestionThreeSlide = ({ onNext, handleAnswerSubmit }) => {
  const [answer, setAnswer] = useState("");

  const handleInputChange = (event) => {
    setAnswer(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    handleAnswerSubmit(answer, "5");

    onNext();
  };

  return (
    <div className={styles.slide}>
      <p className={styles.question}>Solve for x: 3x + 7 = 22.</p>
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

export default QuestionThreeSlide;
