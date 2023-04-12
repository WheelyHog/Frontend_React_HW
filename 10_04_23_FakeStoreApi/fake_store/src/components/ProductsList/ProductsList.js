import React, { useEffect, useState } from 'react'
import { products_req } from '../../requests/product_req';
import ProductItem from '../ProductItem/ProductItem';
import s from './ProductsList.module.css'

export default function ProductsList({ addToCart }) {
  const [products, setProducts] = useState([]);
  useEffect(() => products_req('', setProducts), [])



  return (
    <>
      <h2 className={s.header}>All Products:</h2>
      <div className={s.products_inner}>
        {products.map(product => <ProductItem key={product.id} product={product} addToCart={addToCart} />)}
      </div>
    </>

  )
}
