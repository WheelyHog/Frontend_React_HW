import styles from "./Banner.module.css"
function Banner() {
    return (
        <div className={styles.banner_inner}>
            <div className={styles.banner_description}>
                <h1 className={styles.banner_title}>Веломастерская “Велозар”</h1>
                <p className={styles.banner_text}>Мы, мастера веломастерской «Велозар», как раз те самые счастливые
                    люди, которые смогли превратить свое увлечение и хобби в профессию. Мы сами любим кататься и хотим
                    чтобы Ваш двухколесный друг приносил Вам только радость и удовольствие от езды.</p>
            </div>
            <div>
                <img src="/images/dino.png" alt="dino-img"/>
            </div>
        </div>
    )
}

export default Banner