import React, { useState } from "react";

import SlideContainer from "../../SlideContainer/SlideContainer";
import Button from "../../Button/Button";
import styles from "./QuestionTwoSlide.module.css";
import Question from "../../Question/Question";
import RadioInput, { RadioContainer } from "../../RadioInput/RadioInput";

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
    <SlideContainer>
      <Question className={styles.question}>
        What is the chemical symbol for gold?
      </Question>
      <RadioContainer>
        <RadioInput
          value="a"
          checked={selectedOption === "a"}
          onChange={handleOptionChange}
        >
          Au
        </RadioInput>
        <RadioInput
          value="b"
          checked={selectedOption === "b"}
          onChange={handleOptionChange}
        >
          Ag
        </RadioInput>
        <RadioInput
          value="c"
          checked={selectedOption === "c"}
          onChange={handleOptionChange}
        >
          Fe
        </RadioInput>
        <RadioInput
          value="d"
          checked={selectedOption === "d"}
          onChange={handleOptionChange}
        >
          Hg
        </RadioInput>
      </RadioContainer>

      <Button onClick={handleSubmit}>Next</Button>
    </SlideContainer>
  );
};

export default QuestionTwoSlide;
