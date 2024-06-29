import { NavLink } from 'react-router-dom'
import styles from './NavBar.module.scss'

function NavBar({ links }) {
  return (
    <nav className={styles.navBar}>
      <ul className={styles.navBar_ul}>
        {links.map((link, index) => (
          <li key={index} className={styles.navBar_li}>
            <NavLink to={link.href}>{link.label}</NavLink>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default NavBar
