import styles from "./Label.module.css";

const Label = ({ children, ...props }) => (
  <label {...props} className={styles.label}>
    {children}
  </label>
);

export default Label;
