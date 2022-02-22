import React from 'react'
import AdLarge from '../ads/AdLarge'
import ContainerBar from '../bar/ContainerBar'
import { Link } from 'react-router-dom'
import './Contact.scss'

const cb = {
  title: 'Contacto',
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

const Contact = () => {
  return (
    <div className='contact-container' >
      <div className='extra-container' >
        <div className='ad1-container' >
          <AdLarge />
        </div>
      </div>
      <div className='contact-body' >
        {/* --------------------------- */}
        <div className='background-container' >
          <div className='background-header' >
            <ContainerBar prop={cb} />
          </div>
          <div className='background-body' >
            <div className='contact-body-container' >
              contacto
            </div>
          </div>
        </div>
        {/* --------------------------- */}
      </div>
    </div>
  )
}

export default Contact