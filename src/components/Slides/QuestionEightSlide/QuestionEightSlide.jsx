import React, { useState } from "react";
import styles from "./QuestionEightSlide.module.css";
import SlideContainer from "../../SlideContainer/SlideContainer";
import Question from "../../Question/Question";
import Input from "../../Input/Input";
import Label from "../../Label/Label";
import Button from "../../Button/Button";

const QuestionEightSlide = ({ onNext, handleAnswerSubmit }) => {
  const [answer, setAnswer] = useState("");

  const handleInputChange = (event) => {
    setAnswer(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    handleAnswerSubmit(answer, "6");

    onNext();
  };

  return (
    <SlideContainer>
      <Question className={styles.question}>Solve for x: 2x - 3 = 9.</Question>
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

export default QuestionEightSlide;
