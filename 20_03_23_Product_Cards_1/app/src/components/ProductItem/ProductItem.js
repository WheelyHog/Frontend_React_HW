import s from './ProductItem.module.css'
import image from './assets/no-image.png'

function ProductItem({ id, name, price, count, incr_count, decr_count, deleteProduct, addToCart }) {

    const deleteHandle = (e) => {
        if (e.target.tagName === 'DIV') {
            deleteProduct(id)
        }
    }

    return (
        <div className={s.card} onDoubleClick={(event) => deleteHandle(event)}>
            <img src={image} alt='product' />
            <h2>{name}</h2>
            <h4>Price: {price} $</h4>
            <div className={s.triggers}>
                <button onClick={(event) => incr_count(id, event)}>+</button>
                {count}
                <button onClick={() => decr_count(id)}>-</button>
            </div>
            <button className={s.add_btn} onClick={() => addToCart(id)}>Add to Cart</button>
        </div>
    )
}

export default ProductItem