import React from 'react'

//CSS
import styles from './Banner.module.css'

const Banner = ({ image }) => {
    return (
        <div className={styles.banner} style={{ backgroundImage: `url('/imagens/banner-${image}.png')` }}>

        </div>
    )
}

export default Banner