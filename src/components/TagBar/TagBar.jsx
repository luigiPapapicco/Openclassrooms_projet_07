import styles from './TagBar.module.scss'

function TagBar({ content }) {
  return <div className={styles.tagBar}>{content}</div>
}

export default TagBar
