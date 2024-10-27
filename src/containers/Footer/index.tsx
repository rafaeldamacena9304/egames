import styles from '../../globalStyle.module.css'

export const Footer = () => {

    return(
        <footer>
            <div className={styles.container}>
                <div>
                    <h4>
                        Categorias
                    </h4>
                </div>
                <p>&copy; EPLAY 2024 - Todos os direitos reservados</p>
            </div>
        </footer>
    )
}