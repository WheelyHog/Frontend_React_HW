import React from 'react'
import ProductsList from '../../components/ProductsList/ProductsList'

export default function ProductsPage({ addToCart }) {

  return (
    <div>
      <ProductsList addToCart={addToCart} />
    </div>
  )
}
