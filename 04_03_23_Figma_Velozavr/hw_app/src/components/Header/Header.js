import Nav from "../Nav/Nav";
import styles from "./Header.module.css"

function Header() {
    return (
        <div className={styles.header_inner}>
            <a href="#"><img alt="logo" src="/images/logo.png"/></a>
            <Nav/>
            <button className={styles.header_btn}>Связаться</button>
        </div>
    )
}

export default Header