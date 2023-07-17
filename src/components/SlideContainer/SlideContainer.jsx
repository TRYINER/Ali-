import styles from "./SlideContainer.module.css";

const SlideContainer = ({ children }) => {
  return <div className={styles.container}>{children}</div>;
};

export default SlideContainer;
