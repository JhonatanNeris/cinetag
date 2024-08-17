import React, { useState, useEffect } from 'react'

//Import styles
import styles from './Home.module.css'

//Components
import Banner from 'components/Banner'
import Container from 'components/Container'
import Title from 'components/Title'
import Card from 'components/Card'



const Home = () => {

    const [videos, setVideos] = useState([])

    useEffect(() => {
        fetch('https://my-json-server.typicode.com/jhonatanNeris/cinetag-api/videos')
        .then(resposta => resposta.json())
        .then(dados => {
            setVideos(dados)
        })

      
    }, [videos])
    
    return (
        <>
            <Banner image="home" />
            <Container>
                <Title>
                    <h1>Um lugar para guardar seus vídeos e filmes!</h1>
                </Title>
                <section className={styles.container}>
                    {videos && videos.map((video) => (
                        <Card id={video.id} img={video.capa} title={video.titulo} key={video.id} />
                    ))}

                </section>
            </Container>

        </>
    )
}

export default Home