import React, { useState } from "react";
import styles from "./QuestionOneSlide.module.css";

const QuestionOneSlide = ({ onNext, handleAnswerSubmit }) => {
  const [answer, setAnswer] = useState("");

  const handleInputChange = (event) => {
    setAnswer(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    handleAnswerSubmit(answer, "paris");

    onNext();
  };

  return (
    <div className={styles.slide}>
      <p className={styles.question}>The capital of France is ________.</p>
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

export default QuestionOneSlide;
