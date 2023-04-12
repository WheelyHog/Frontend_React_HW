import styles from "./Nav.module.css"

function Nav() {
    return (
        <ul className={styles.top_menu}>
            <li className={styles.top_menu_item}><a className={styles.active_item} href="#">О нас</a></li>
            <li className={styles.top_menu_item}><a href="#">Услуги</a></li>
            <li className={styles.top_menu_item}><a href="#">Аренда</a></li>
        </ul>
    )
}

export default Nav