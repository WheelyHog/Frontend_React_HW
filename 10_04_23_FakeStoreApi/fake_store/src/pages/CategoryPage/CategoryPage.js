import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ProductItem from '../../components/ProductItem/ProductItem';
import { getCategory } from '../../requests/product_req';
import s from './CategoryPage.module.css'

export default function CategoryPage() {
  const { category } = useParams()
  const [categoryList, setCategoryList] = useState([]);
  useEffect(() => getCategory(category, setCategoryList), [])
  return (
    <div className={s.category_inner}>
      <h2>{category}</h2>
      <div className={s.products}>
        {categoryList.map(product => <ProductItem {...product} key={product.id} />)}
      </div>
    </div>

  )
}
