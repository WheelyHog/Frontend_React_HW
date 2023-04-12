import styles from "./Services.module.css"
function Services() {
    return (
        <div className={styles.services_inner}>
            <div className={styles.services_description}>
                <h2 className={styles.services_title}>Что мы предлагаем</h2>
                <p className={styles.services_text}>В нашей мастерской можно выполнить комплексное техническое
                    обслуживание велосипеда, ремонт и настройку всех его узлов, шиномонтажные работы. Вовремя
                    проведенное ТО велосипеда помогает избежать многих проблем и дорогого ремонта. Все работы выполняем
                    качественно и с душой. </p>
            </div>
            <div className={styles.services_img}>
                <img src="/images/services.png" alt="services_img"/>
            </div>
        </div>
    )
}

export default Services