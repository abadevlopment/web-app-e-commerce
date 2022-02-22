import React from 'react'
import { Link } from 'react-router-dom'
import CartWidget from '../cart/CartWidget'
import Search from '../extras/Search'
import UserWidget from '../user/UserWidget'
import './NavBar.scss'

const NavBar = () => {
  return (
      <div className='header-body' >
        <Link to='/' type='button' className='brand' >
          <p>e-commerce</p>
        </Link>
        <div className='buttons' >
          buttons
        </div>
        <div className='widgets' >
          <div className='user-widget' >
            <UserWidget/>
          </div>
          <div className='cart-widget' >
            <CartWidget/>
          </div>
        </div>
        <div className='search' >
          <Search/>
        </div>
      </div>
  )
}

export default NavBar