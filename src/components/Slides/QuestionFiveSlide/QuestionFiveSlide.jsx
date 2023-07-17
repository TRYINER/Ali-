import React, { useState } from "react";
import styles from "./QuestionFiveSlide.module.css";
import SlideContainer from "../../SlideContainer/SlideContainer";
import Question from "../../Question/Question";
import Button from "../../Button/Button";
import Input from "../../Input/Input";
import Label from "../../Label/Label";

const QuestionFiveSlide = ({ onNext, handleAnswerSubmit }) => {
  const [answer, setAnswer] = useState("");

  const handleInputChange = (event) => {
    setAnswer(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    handleAnswerSubmit(answer, "4");

    onNext();
    // Handle the submitted answer here
  };

  return (
    <SlideContainer>
      <Question>Find the value of y: 2y + 5 = 13.</Question>
      <Label htmlFor="answer">Answer</Label>
      <Input
        id="answer"
        type="number"
        value={answer}
        onChange={handleInputChange}
      />
      <Button onClick={handleSubmit}>Next</Button>
    </SlideContainer>
  );
};

export default QuestionFiveSlide;
