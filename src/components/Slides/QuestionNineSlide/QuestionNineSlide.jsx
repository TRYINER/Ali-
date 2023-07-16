import React, { useState } from "react";
import styles from "./QuestionNineSlide.module.css";

const QuestionNineSlide = ({ onNext, handleAnswerSubmit }) => {
  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    handleAnswerSubmit(selectedOption, "a");

    onNext();
    // Handle the submitted answer here
  };

  return (
    <div className={styles.slide}>
      <p className={styles.question}>Who wrote the play "Romeo and Juliet"?</p>
      <form onSubmit={handleSubmit}>
        <label>
          <input
            type="radio"
            value="a"
            checked={selectedOption === "a"}
            onChange={handleOptionChange}
          />
          William Shakespeare
        </label>
        <label>
          <input
            type="radio"
            value="b"
            checked={selectedOption === "b"}
            onChange={handleOptionChange}
          />
          Oscar Wilde
        </label>
        <label>
          <input
            type="radio"
            value="c"
            checked={selectedOption === "c"}
            onChange={handleOptionChange}
          />
          Jane Austen
        </label>
        <label>
          <input
            type="radio"
            value="d"
            checked={selectedOption === "d"}
            onChange={handleOptionChange}
          />
          Charles Dickens
        </label>
        <button type="submit" className={styles.submitButton}>
          Next
        </button>
      </form>
    </div>
  );
};

export default QuestionNineSlide;
