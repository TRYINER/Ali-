import React, { useState } from "react";
import styles from "./QuestionFourSlide.module.css";
import SlideContainer from "../../SlideContainer/SlideContainer";
import Question from "../../Question/Question";
import RadioInput, { RadioContainer } from "../../RadioInput/RadioInput";
import Button from "../../Button/Button";

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
    <SlideContainer>
      <Question className={styles.question}>
        Who painted the Mona Lisa?
      </Question>

      <RadioContainer>
        <RadioInput
          value="a"
          checked={selectedOption === "a"}
          onChange={handleOptionChange}
        >
          Leonardo da Vinci
        </RadioInput>

        <RadioInput
          value="b"
          checked={selectedOption === "b"}
          onChange={handleOptionChange}
        >
          Vincent van Gogh
        </RadioInput>

        <RadioInput
          value="c"
          checked={selectedOption === "c"}
          onChange={handleOptionChange}
        >
          Pablo Picasso
        </RadioInput>

        <RadioInput
          value="d"
          checked={selectedOption === "d"}
          onChange={handleOptionChange}
        >
          Johannes Vermeer
        </RadioInput>
      </RadioContainer>

      <Button onClick={handleSubmit}>Next</Button>
    </SlideContainer>
  );
};

export default QuestionFourSlide;
