import React, { useState } from "react";
import styles from "./QuestionNineSlide.module.css";
import SlideContainer from "../../SlideContainer/SlideContainer";
import Question from "../../Question/Question";
import RadioInput, { RadioContainer } from "../../RadioInput/RadioInput";
import Button from "../../Button/Button";

const QuestionNineSlide = ({ onNext, handleAnswerSubmit }) => {
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
      <Question>Who wrote the play "Romeo and Juliet"?</Question>

      <RadioContainer>
        <RadioInput
          id="a"
          value="a"
          checked={selectedOption === "a"}
          onChange={handleOptionChange}
        >
          William Shakespeare
        </RadioInput>
        <RadioInput
          id="b"
          value="b"
          checked={selectedOption === "b"}
          onChange={handleOptionChange}
        >
          Oscar Wilde
        </RadioInput>
        <RadioInput
          id="c"
          value="c"
          checked={selectedOption === "c"}
          onChange={handleOptionChange}
        >
          Jane Austen
        </RadioInput>
        <RadioInput
          id="d"
          value="d"
          checked={selectedOption === "d"}
          onChange={handleOptionChange}
        >
          Charles Dickens
        </RadioInput>
      </RadioContainer>

      <Button onClick={handleSubmit}>Next</Button>
    </SlideContainer>
  );
};

export default QuestionNineSlide;
