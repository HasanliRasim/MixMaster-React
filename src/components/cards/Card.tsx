import styles from "./Card.module.scss"

const Card = (props: any) => {
  return (
    <div className={styles.card}>
      <div className={styles.profileImg}>
        <img src={props.img} alt="img" className={styles.img}/>
      </div>
      <div className={styles.info}>
        <div className={styles.use}>{props.text}</div>
        <div className={styles.name}>{props.fullName}</div>
        <div className={styles.about}>{props.type}</div>
        <button className={styles.btn}>Details</button>
      </div>
    </div>
  )
}

export default Card