import styles from "./About.module.css"

function About() {
    return (
        <div className={styles.about_inner}>
            <p className={styles.about_text}>Приехав к нам однажды, многие наши клиенты становятся постоянными, а часть
                из них даже друзьями.</p>

            <p className={styles.about_text}>А также в нашей мастерской можно отремонтировать электросамокат и
                электровелосипед.</p>
        </div>
    )
}

export default About