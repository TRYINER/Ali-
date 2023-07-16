import React, { useState } from "react";
import styles from "./QuestionTwoSlide.module.css";

const QuestionTwoSlide = ({ onNext, handleAnswerSubmit }) => {
  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    handleAnswerSubmit(selectedOption, "a");
    onNext();
  };

  return (
    <div className={styles.slide}>
      <p className={styles.question}>What is the chemical symbol for gold?</p>
      <form onSubmit={handleSubmit}>
        <label>
          <input
            type="radio"
            value="a"
            checked={selectedOption === "a"}
            onChange={handleOptionChange}
          />
          Au
        </label>
        <label>
          <input
            type="radio"
            value="b"
            checked={selectedOption === "b"}
            onChange={handleOptionChange}
          />
          Ag
        </label>
        <label>
          <input
            type="radio"
            value="c"
            checked={selectedOption === "c"}
            onChange={handleOptionChange}
          />
          Fe
        </label>
        <label>
          <input
            type="radio"
            value="d"
            checked={selectedOption === "d"}
            onChange={handleOptionChange}
          />
          Hg
        </label>
        <button type="submit" className={styles.submitButton}>
          Next
        </button>
      </form>
    </div>
  );
};

export default QuestionTwoSlide;
