import React, { useEffect, useState } from 'react'

//Import CSS
import styles from './Player.module.css'

//Components
import Banner from 'components/Banner'
import Title from 'components/Title'

//React Router 
import { useParams } from 'react-router-dom'
import Container from 'components/Container'
import NotFound from 'pages/NotFound'

const Player = () => {

    const [video, setVideo] = useState()

    const params = useParams()
    const idParams = Number(params.id)
    
    useEffect(() => {
        fetch(`https://my-json-server.typicode.com/jhonatanNeris/cinetag-api/videos?id=${idParams}`)
        .then(resposta => resposta.json())
        .then(dados => {
            setVideo(...dados)
        })

    }, [idParams])

    if (!video) {
        return <NotFound />
    }

    return (
        <>
            <Banner image="player" />
            <Container>
                <Title>
                    <h1>Player</h1>
                </Title>
                <section className={styles.container}>
                    <iframe
                        width="100%"
                        // height="80vh"
                        src={video.link}
                        title={video.titulo}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen>
                    </iframe>
                </section>
            </Container>
        </>
    )
}

export default Player