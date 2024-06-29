import styles from './Card.module.scss'

function Card({ cover, title }) {
  return (
    <div className={styles.cardContainer}>
      <img className={styles.cardImg} src={cover} alt=""></img>
      <h2 className={styles.titleContainer}>{title}</h2>
    </div>
  )
}

export default Card
