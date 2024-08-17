import React from 'react'

//CSS
import styles from './Card.module.css'

//Imagens
import FavoriteIcon from './favorite_outline.png'
import Disfavorite from './favorite.png'

//Context
import { useFavoritoContext } from 'contextos/Favoritos'
import { Link } from 'react-router-dom'

const Card = ({ id, title, img }) => {

    const { favorito, adicionarFavorito } = useFavoritoContext()
    const isFavorite = favorito.some((item) => item.id === id)
    const icon = isFavorite ? Disfavorite : FavoriteIcon
    return (
        <div className={styles.container}>
            <Link className={styles.link} to={`/${id}`}>
                <img src={img} alt={title} className={styles.img} />
                <h2>{title}</h2>
            </Link>
            <img src={icon}
                alt="Favoritar filme"
                className={styles.favorite}
                onClick={() => adicionarFavorito({ id, title, img })}
            />
        </div>
    )
}

export default Card