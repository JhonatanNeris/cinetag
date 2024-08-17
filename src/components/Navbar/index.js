import React from 'react'

//React Router Dom
import { Link } from 'react-router-dom'

//Import CSS
import styles from './Navbar.module.css'

//Imagens
import logo from './logo.png'

//Components
import NavbarLink from 'components/NavbarLink'
import Container from 'components/Container'

const Navbar = () => {
    return (
        <div className={styles.headerBg}>
            <Container>
                <header className={styles.navbar}>
                    <Link to="/">
                        <img src={logo} alt="Logo do cinetag"></img>
                    </Link>
                    <nav>
                        <NavbarLink url="/">
                            Home
                        </NavbarLink>
                        <NavbarLink url="/favorites">
                            Favoritos
                        </NavbarLink>
                    </nav>
                </header>
            </Container>
        </div>


    )
}

export default Navbar