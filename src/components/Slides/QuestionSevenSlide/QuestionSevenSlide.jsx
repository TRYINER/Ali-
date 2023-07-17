import React, { useState } from "react";
import styles from "./QuestionSevenSlide.module.css";
import SlideContainer from "../../SlideContainer/SlideContainer";
import Question from "../../Question/Question";
import Label from "../../Label/Label";
import Input from "../../Input/Input";
import Button from "../../Button/Button";

const QuestionSevenSlide = ({ onNext, handleAnswerSubmit }) => {
  const [answer, setAnswer] = useState("");

  const handleInputChange = (event) => {
    setAnswer(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    handleAnswerSubmit(answer, "yellow");

    onNext();
  };

  return (
    <SlideContainer>
      <Question>
        The primary colors in painting are red, blue, and ________.
      </Question>

      <Label htmlFor="answer">Answer</Label>

      <Input type="text" value={answer} onChange={handleInputChange} />
      <Button onClick={handleSubmit}>Next</Button>
    </SlideContainer>
  );
};

export default QuestionSevenSlide;
