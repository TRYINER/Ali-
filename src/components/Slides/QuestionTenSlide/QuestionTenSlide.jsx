import React, { useState } from "react";
import styles from "./QuestionTenSlide.module.css";
import SlideContainer from "../../SlideContainer/SlideContainer";
import Question from "../../Question/Question";
import Input from "../../Input/Input";
import Label from "../../Label/Label";
import Button from "../../Button/Button";

const QuestionTenSlide = ({ onNext, handleAnswerSubmit }) => {
  const [answer, setAnswer] = useState("");

  const handleInputChange = (event) => {
    setAnswer(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    handleAnswerSubmit(answer, "compilation");

    onNext();
    // Handle the submitted answer here
  };

  return (
    <SlideContainer>
      <Question>
        The process of converting a high-level programming language into machine
        code is called ________.
      </Question>

      <Label htmlFor="answer">Answer</Label>
      <Input
        id="answer"
        type="text"
        value={answer}
        onChange={handleInputChange}
      />
      <Button onClick={handleSubmit}>Check Result</Button>
    </SlideContainer>
  );
};

export default QuestionTenSlide;
