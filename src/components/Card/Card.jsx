import styles from './Card.module.scss'

function Card({ cover, title }) {
  return (
    <article className={styles.article}>
      <img className={styles.cardImg} src={cover} alt=""></img>
      <h2 className={styles.cardTitle}>{title}</h2>
    </article>
  )
}

export default Card
