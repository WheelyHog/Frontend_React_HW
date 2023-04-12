import CardItem from "../CardItem/CardItem";
import styles from "./CardsList.module.css"

function CardsList() {
    return (
        <div className={styles.cards_inner}>
            <CardItem title={"Годовое ТО"} color={"#22356F"}/>
            <CardItem title={"Выравнивание колес"} color={"#0052C1"}/>
            <CardItem title={"Настройка переключателей"} color={"#76B58B"}/>
        </div>
    )
}

export default CardsList