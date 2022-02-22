import React from 'react'
import { Link } from 'react-router-dom'
import ContainerBar from '../bar/ContainerBar'
import './Cart.scss'

const cb = {
  title: 'Carrito de compras',
  bc: [
    { name: 'Inicio / ', class: 'bcLink', link: '/' },
  ],
  buttons:
    <>
      <button type='button' className='linkProductos' >
        <Link to='/products' className='link' >
          Ver todos los productos
        </Link>
      </button>
    </>
}

const Cart = () => {
  return (
    <div className='cart-container' >
      <div className='cart-body' >
        {/* --------------------------- */}
        <div className='background-container' >
          <div className='background-header' >
            <ContainerBar prop={cb} />
          </div>
          <div className='background-body' >
            <div className='cart-body-container' >
              cart
            </div>
          </div>
        </div>
        {/* --------------------------- */}
      </div>
    </div>

  )
}

export default Cart