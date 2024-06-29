import React from 'react'
import styles from './Logo.module.scss'
import { ReactComponent as LogoSVG } from '../../assets/logo/logo.svg'

function Logo({ imgClassName }) {
  return <LogoSVG className={`${styles[imgClassName]}`} />
}

export default Logo
