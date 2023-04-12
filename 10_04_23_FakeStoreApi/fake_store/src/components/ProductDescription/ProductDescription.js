import React, { useEffect, useState } from 'react'
import { products_req } from '../../requests/product_req';
import Rating from '../Rating/Rating';
import s from './ProductDescription.module.css'

export default function ProductDescription({ id }) {

  const [product, setProduct] = useState({});
  useEffect(() => {
    products_req(id, (product) => setProduct(product))
  }, [])
  const { title, image, price, description, rating } = product

  return (
    <div className={s.product_inner}>
      <h3>{title}</h3>
      <img src={image} alt={image} />
      <h4>Price: {price} $</h4>
      <p>Description: {description}</p>
      {/* <Rating rating={rating.rate} /> */}
      <Rating {...rating} />
      {/* <p>{rating.rate}</p> */}
    </div>
  )
}
