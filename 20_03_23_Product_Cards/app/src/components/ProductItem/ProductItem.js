import React, { useState } from 'react'
import s from './ProductItem.module.css'
import image from '../../assets/no-image.png'


function ProductItem({ product, onProductChange, onProductDelete }) {

  const [count, setCount] = useState(product.count)

  const incrCount = () => {
    setCount(count + 1)
    onProductChange(product.id, count + 1)
  }

  const decrCount = () => {
    if (count > 0) {
      setCount(count - 1)
      onProductChange(product.id, count - 1)
    }
  }

  const handleDblClick = () => {
    onProductDelete(product.id)
  }

  return (
    <div className={s.product} onDoubleClick={handleDblClick}>
      <img src={image} />
      <h2>{product.name}</h2>
      <h4>Price: {product.price} $</h4>
      <div className={s.triggers}>
        <button className={s.trigger} onClick={incrCount}>+</button>
        <p>{count}</p>
        <button className={s.trigger} onClick={decrCount}>-</button>
      </div>
    </div>
  )
}

export default ProductItem
