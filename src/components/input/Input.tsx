import styles from "./Input.module.scss";

const Input = () => {
  return (
    <div className={styles.parent}>
      <div className={styles.parent_container}>
        <input className={styles. parent_container_input} type="text" />
        <button className={styles. parent_container_btn}>Search</button>
      </div>
    </div>
  );
};

export default Input;
