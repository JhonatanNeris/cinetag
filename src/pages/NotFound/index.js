import React from 'react'

//import css
import styles from './NotFound.module.css'
import Container from 'components/Container'

const NotFound = () => {
    return (
        <Container minHeight={true}>
            <h2>Ops!</h2>
            <p>O conteúdo que você procura não foi encontrado!</p>
        </Container>

    )
}

export default NotFound