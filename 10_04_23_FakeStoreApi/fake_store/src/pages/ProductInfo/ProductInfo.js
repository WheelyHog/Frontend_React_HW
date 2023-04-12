import React from 'react'
import { useParams } from 'react-router-dom'
import ProductDescription from '../../components/ProductDescription/ProductDescription'
import s from './ProductInfo.module.css'


export default function ProductInfo() {
  const { id } = useParams()
  return (
    <div className={s.product_info}>
      <h2>Full Description of this Product:</h2>
      <ProductDescription id={id} />
      <div>

      </div>
    </div>
  )
}
