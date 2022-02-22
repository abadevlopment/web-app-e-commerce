import React from 'react'
import { Link } from 'react-router-dom'

const Item = () => {
  return (
    <Link to='/detail' className='item-list-card' >
      Item
    </Link>
  )
}

export default Item