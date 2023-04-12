import React from 'react'
import { AiFillStar } from 'react-icons/ai'

export default function Rating({ rating }) {
  let stars = [1, 2, 3, 4, 5]
  return (
    <div>
      {stars.map(star => star < rating ? < AiFillStar color='orange' key={star} /> : <AiFillStar key={star} />)}
    </div>
  )
}
