import { useState } from 'react'
import styles from './Collapse.module.scss'
import chevron from '../../assets/chevrons/arrow.svg'

function Collapse({ title, content }) {
  const [isOpen, setIsOpen] = useState(false)

  const handleToggle = () => {
    setIsOpen(!isOpen)
  }

  const inputId = `collapse-toggle-${title.replace(/\s+/g, '-')}`

  return (
    <div className={styles.collapseContainer}>
      <div className={styles.collapseBox}>
        <h2 className={styles.collapseTitle}>{title}</h2>
        <div className={styles.chevronWrapper}>
          <input
            type="checkbox"
            checked={isOpen}
            readOnly
            id={inputId}
            className={styles.chevronCheckbox}
          />
          <label
            htmlFor={inputId}
            className={styles.chevronLabel}
            onClick={handleToggle}
          >
            <img
              src={chevron}
              alt="symbole de l'état du collapse"
              className={`${styles.chevron} ${
                isOpen ? styles.chevronOpen : ''
              }`}
            />
          </label>
        </div>
      </div>
      <div className={`${styles.txtContent} ${isOpen ? styles.open : ''}`}>
        <div className={styles.contentParagraphe}>{content}</div>
      </div>
    </div>
  )
}

export default Collapse
