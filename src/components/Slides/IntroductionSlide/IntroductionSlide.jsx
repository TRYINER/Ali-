import { useState } from "react";
import styles from "./IntroductionSlide.module.css";
import Button from "../../Button/Button";
import SlideContainer from "../../SlideContainer/SlideContainer";
import Input from "../../Input/Input";
import Label from "../../Label/Label";

const IntroductionSlide = ({ onNext, setUser }) => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleAgeChange = (event) => {
    setAge(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    setUser({ name, age });

    onNext();
  };

  return (
    <SlideContainer>
      <p className={styles.title}>Tell us a little about yourself!</p>

      <div className={styles.inputContainer}>
        <Label htmlFor="name">Name</Label>
        <Input type="text" id="name" onChange={handleNameChange} value={name} />
      </div>
      <div className={styles.inputContainer}>
        <Label htmlFor="age">Age</Label>
        <Input type="number" id="age" onChange={handleAgeChange} value={age} />
      </div>
      <Button type="submit" onClick={handleSubmit}>
        Submit
      </Button>
    </SlideContainer>
  );
};

export default IntroductionSlide;
