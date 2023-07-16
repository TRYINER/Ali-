import React, { useState } from "react";
import styles from "./QuestionFourSlide.module.css";

const QuestionFourSlide = ({ onNext, handleAnswerSubmit }) => {
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
      <p className={styles.question}>Who painted the Mona Lisa?</p>
      <form onSubmit={handleSubmit}>
        <label>
          <input
            type="radio"
            value="a"
            checked={selectedOption === "a"}
            onChange={handleOptionChange}
          />
          Leonardo da Vinci
        </label>
        <label>
          <input
            type="radio"
            value="b"
            checked={selectedOption === "b"}
            onChange={handleOptionChange}
          />
          Vincent van Gogh
        </label>
        <label>
          <input
            type="radio"
            value="c"
            checked={selectedOption === "c"}
            onChange={handleOptionChange}
          />
          Pablo Picasso
        </label>
        <label>
          <input
            type="radio"
            value="d"
            checked={selectedOption === "d"}
            onChange={handleOptionChange}
          />
          Michelangelo
        </label>
        <button type="submit" className={styles.submitButton}>
          Next
        </button>
      </form>
    </div>
  );
};

export default QuestionFourSlide;
