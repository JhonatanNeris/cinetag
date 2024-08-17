import React from 'react'

//CSS
import styles from './Favorites.module.css'
import Banner from 'components/Banner'
import Title from 'components/Title'
import Card from 'components/Card'
import Container from 'components/Container'
import { useFavoritoContext } from 'contextos/Favoritos'

const Favorites = () => {

    const { favorito } = useFavoritoContext()
    return (
        <>
            <Banner image="favoritos" />
            <Container minHeight={true} >
                <Title>
                    <h1>Meus Favoritos</h1>
                </Title>
                <section className={styles.container}>
                    {favorito && favorito.map((item) => (<Card key={item.id} id={item.id} img={item.img} title={item.title}/>))}
                    
                </section>

            </Container>
        </>

    )
}

export default Favorites