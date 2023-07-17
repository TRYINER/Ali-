import React, { useState } from "react";
import styles from "./QuestionThreeSlide.module.css";
import SlideContainer from "../../SlideContainer/SlideContainer";
import Question from "../../Question/Question";
import Input from "../../Input/Input";
import Button from "../../Button/Button";
import Label from "../../Label/Label";

const QuestionThreeSlide = ({ onNext, handleAnswerSubmit }) => {
  const [answer, setAnswer] = useState("");

  const handleInputChange = (event) => {
    setAnswer(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    handleAnswerSubmit(answer, "5");

    onNext();
  };

  return (
    <SlideContainer>
      <Question>Solve for x: 3x + 7 = 22.</Question>
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

export default QuestionThreeSlide;
