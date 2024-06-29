import starsActive from '../../assets/stars/star-active.svg'
import starsInactive from '../../assets/stars/star-inactive.svg'
import styles from './Rating.module.scss'

function Rating({ rating }) {
  const stars = []
  for (let i = 1; i <= 5; i++) {
    stars.push(
      <img
        key={i}
        src={i <= rating ? starsActive : starsInactive}
        alt={i <= rating ? 'Full Star' : 'Empty Star'}
        className={styles.star}
      />
    )
  }

  return <div className={styles.rating}>{stars}</div>
}

export default Rating
