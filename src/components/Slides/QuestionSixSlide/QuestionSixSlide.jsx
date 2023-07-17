import React, { useState } from "react";
import styles from "./QuestionSixSlide.module.css";
import SlideContainer from "../../SlideContainer/SlideContainer";
import Question from "../../Question/Question";
import RadioInput, { RadioContainer } from "../../RadioInput/RadioInput";
import Button from "../../Button/Button";

const QuestionSixSlide = ({ onNext, handleAnswerSubmit }) => {
  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    handleAnswerSubmit(selectedOption, "b");

    onNext();
  };

  return (
    <SlideContainer>
      <Question>What is the largest planet in our solar system?</Question>

      <RadioContainer>
        <RadioInput
          value="a"
          checked={selectedOption === "a"}
          onChange={handleOptionChange}
        >
          Earth
        </RadioInput>

        <RadioInput
          value="b"
          checked={selectedOption === "b"}
          onChange={handleOptionChange}
        >
          Jupiter
        </RadioInput>

        <RadioInput
          value="c"
          checked={selectedOption === "c"}
          onChange={handleOptionChange}
        >
          Mars
        </RadioInput>

        <RadioInput
          value="d"
          checked={selectedOption === "d"}
          onChange={handleOptionChange}
        >
          Saturn
        </RadioInput>
      </RadioContainer>

      <Button onClick={handleSubmit}>Next</Button>
    </SlideContainer>
  );
};

export default QuestionSixSlide;
