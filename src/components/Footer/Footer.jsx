import Logo from '../Logo/Logo'
import styles from './Footer.module.scss'

function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        <Logo imgClassName="footer_logo" />
        <p className={styles.footer_text}>© 2020 Kasa. All rights reserved</p>
      </footer>
    </>
  )
}

export default Footer
