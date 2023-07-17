import styles from "./RadioInput.module.css";

const RadioInput = ({ value, checked, onChange, children }) => {
  return (
    <label className={checked ? styles.labelChecked : styles.label}>
      <input
        className={styles.input}
        type="radio"
        value={value}
        checked={checked}
        onChange={onChange}
      />
      {children}
    </label>
  );
};

export const RadioContainer = ({ children }) => {
  return <div className={styles.container}>{children}</div>;
};

export default RadioInput;
