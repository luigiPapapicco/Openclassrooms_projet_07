import Logo from '../Logo/Logo'
import NavBar from '../NavBar/NavBar'
import styles from './Header.module.scss'

function Header() {
  const navLinks = [
    { href: '/', label: 'Accueil' },
    { href: '/About', label: 'À Propos' },
  ]

  return (
    <header className={styles.header}>
      <Logo imgClassName="header_logo" />
      <NavBar links={navLinks} />
    </header>
  )
}

export default Header
