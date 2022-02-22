import React from 'react'
import ContainerBar from '../bar/ContainerBar'
import { Link } from 'react-router-dom'
import './ItemDetailContainer.scss'
import ItemDetail from './itemDetail/ItemDetail'

const cb = {
    title: 'Detalle del producto',
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


const ItemDetailContainer = () => {
    return (
        <div className='item-detail-container' >
            <div className='item-detail-body' >
                {/* --------------------------- */}
                <div className='background-container' >
                    <div className='background-header' >
                        <ContainerBar prop={cb} />
                    </div>
                    <div className='background-body' >
                        <div className='item-detail-body-container' >
                            <ItemDetail/>
                        </div>
                    </div>
                </div>
                {/* --------------------------- */}
            </div>
        </div>
        // <div className='centralBody'>
        //     <div className='bodyBase' >
        //         <div className='baseContainer' >
        //             <div className='containerHeader' >
        //                 <ContainerBar prop={cb} />
        //             </div>
        //             <div className='containerBase' >
        //                 <div className='itemDetailContainer' >
        //                     <ItemDetail/>
        //                     {/* <div className='itemDetailBody' >
        //                         detalle
        //                     </div> */}
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        // </div>
    )
}

export default ItemDetailContainer