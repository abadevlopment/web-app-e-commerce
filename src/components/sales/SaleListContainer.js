import React from 'react'
import { Link } from 'react-router-dom'
import ContainerBar from '../bar/ContainerBar'
import './SaleListContainer.scss'

const cb = {
    title: 'Ofertas',
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

const SaleListContainer = () => {
    return (
        <div className='background-container' >
            <div className='background-header' >
                <ContainerBar prop={cb} />
            </div>
            <div className='background-body' >
                <div className='sales-container' >
                    <div className='sales-body' >
                        oferta
                    </div>
                    <div className='sales-body' >
                        oferta
                    </div>
                    <div className='sales-body' >
                        oferta
                    </div>
                    <div className='sales-body' >
                        oferta
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SaleListContainer