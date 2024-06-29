import styles from './FullName.module.scss'

function FullName({ fullName }) {
  const [lastName, firstName] = fullName.split(' ')
  return (
    <p className={styles.fullname}>
      <span className={styles.name_part}>{lastName}</span>
      <span className={styles.name_part}>{firstName}</span>
    </p>
  )
}

export default FullName
