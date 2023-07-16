import styles from "./IntroductionSlide.module.css";

const IntroductionSlide = () => {
  return (
    <div className={styles.slide}>
      <p className={styles.welcome}>
        Hi there, Welcome to the Summer Hackathon PWA
      </p>
      <p className={styles.title}>Tell us a little about yourself!</p>
      <div className={styles.inputContainer}>
        <label className={styles.inputLabel} htmlFor="name">
          Name
        </label>
        <input className={styles.input} type="text" id="name" />
      </div>
      <div className={styles.inputContainer}>
        <label className={styles.inputLabel} htmlFor="age">
          Age
        </label>
        <input className={styles.input} type="number" id="age" />
      </div>
      <button className={styles.submitButton}>Submit</button>
    </div>
  );
};

export default IntroductionSlide;
