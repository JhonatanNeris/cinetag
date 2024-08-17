import React from 'react'

//React router 
import { NavLink } from 'react-router-dom'

//CSS
import styles from './NavbarLink.module.css'

const NavbarLink = ({children, url}) => {
  return (
    <NavLink to={url} className={styles.link}> 
        {children}
    </NavLink>
  )
}

export default NavbarLink