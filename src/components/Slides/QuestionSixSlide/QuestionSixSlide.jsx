import React, { useState } from "react";
import styles from "./QuestionSixSlide.module.css";

const QuestionSixSlide = () => {
  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle the submitted answer here
  };

  return (
    <div className={styles.slide}>
      <p className={styles.question}>
        What is the largest planet in our solar system?
      </p>
      <form onSubmit={handleSubmit}>
        <label>
          <input
            type="radio"
            value="a"
            checked={selectedOption === "a"}
            onChange={handleOptionChange}
          />
          Earth
        </label>
        <label>
          <input
            type="radio"
            value="b"
            checked={selectedOption === "b"}
            onChange={handleOptionChange}
          />
          Jupiter
        </label>
        <label>
          <input
            type="radio"
            value="c"
            checked={selectedOption === "c"}
            onChange={handleOptionChange}
          />
          Mars
        </label>
        <label>
          <input
            type="radio"
            value="d"
            checked={selectedOption === "d"}
            onChange={handleOptionChange}
          />
          Saturn
        </label>
        <button type="submit" className={styles.submitButton}>
          Next
        </button>
      </form>
    </div>
  );
};

export default QuestionSixSlide;
