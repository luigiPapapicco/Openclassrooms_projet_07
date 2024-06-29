import styles from './Avatar.module.scss'

function Avatar({ path, txtAlt }) {
  return <img src={path} alt={txtAlt} className={styles.avatar} />
}

export default Avatar
