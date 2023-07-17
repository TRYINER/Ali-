import React, { useState } from "react";
import styles from "./QuestionOneSlide.module.css";
import SlideContainer from "../../SlideContainer/SlideContainer";
import Button from "../../Button/Button";
import Input from "../../Input/Input";
import Label from "../../Label/Label";
import Question from "../../Question/Question";

const QuestionOneSlide = ({ onNext, handleAnswerSubmit }) => {
  const [answer, setAnswer] = useState("");

  const handleInputChange = (event) => {
    setAnswer(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    handleAnswerSubmit(answer, "paris");

    onNext();
  };

  return (
    <SlideContainer>
      <Question>The capital of France is ________.</Question>
      <Label htmlFor="answer">Answer</Label>
      <Input
        id="answer"
        type="text"
        value={answer}
        onChange={handleInputChange}
      />
      <Button onClick={handleSubmit}>Next</Button>
    </SlideContainer>
  );
};

export default QuestionOneSlide;
