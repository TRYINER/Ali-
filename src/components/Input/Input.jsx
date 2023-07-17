import styles from "./Input.module.css";

const Input = ({ ...rest }) => {
  return <input {...rest} className={styles.input} />;
};

export default Input;
