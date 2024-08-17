import styles from './Container.module.css';

function Container({ children, minHeight}) {

    return (
        <section className={`${styles.container} ${minHeight ? styles.size : ""}`}>
            {children}
        </section>
    )
}

export default Container;