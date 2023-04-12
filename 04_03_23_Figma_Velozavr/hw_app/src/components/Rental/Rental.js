import styles from "./Rental.module.css"

function Rental() {
    return (
        <div className={styles.rental_inner}>
            <div className={styles.rental_img}>
                <img src="/images/rental.png" alt=""/>
            </div>
            <div className={styles.rental_description}>
                <h2 className={styles.rental_title}>Прокат велосипедов</h2>
                <p className={styles.rental_text}>У нас вы можете взять на прокат хорошо обслуженные и настроенные
                    велосипеды. Как раз мы находимся в прекрасном парке!</p>
            </div>
        </div>
    )
}

export default Rental