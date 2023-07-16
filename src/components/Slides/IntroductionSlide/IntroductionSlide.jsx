import { useState } from "react";
import styles from "./IntroductionSlide.module.css";

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
    <div className={styles.slide}>
      <p className={styles.welcome}>
        Hi there, Welcome to the Summer Hackathon PWA
      </p>
      <p className={styles.title}>Tell us a little about yourself!</p>
      <form onSubmit={handleSubmit}>
        <div className={styles.inputContainer}>
          <label className={styles.inputLabel} htmlFor="name">
            Name
          </label>
          <input
            className={styles.input}
            type="text"
            id="name"
            onChange={handleNameChange}
            value={name}
          />
        </div>
        <div className={styles.inputContainer}>
          <label className={styles.inputLabel} htmlFor="age">
            Age
          </label>
          <input
            className={styles.input}
            type="number"
            id="age"
            onChange={handleAgeChange}
            value={age}
          />
        </div>
        <button className={styles.submitButton} type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default IntroductionSlide;
