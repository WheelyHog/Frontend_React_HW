import styles from "./CardItem.module.css"
function CardItem(props){
    return(
        <div className={styles.card_inner} style={{backgroundColor : `${props.color}`}}>
            <h2 className={styles.card_title}>{props.title}</h2>

        </div>
    )
}

export default CardItem