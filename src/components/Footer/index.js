import React from 'react'

//CSS
import styles from './Footer.module.css'
import Container from 'components/Container'

const Footer = () => {
    return (
        <div className={styles.footerBg}>
            <Container>
                <footer className={styles.footer}>
                    <h2>Desenvolvido por Jhonatan Neris.</h2>
                </footer>
            </Container>
        </div>

    )
}

export default Footer