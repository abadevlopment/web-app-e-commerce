import React from 'react'
import ContainerBar from '../bar/ContainerBar'
import ItemList from './itemList/ItemList'
import './ItemListContainer.scss'

const cb = {
    title: 'Productos',
    bc: [
        { name: 'Inicio / ', class: 'bcLink', link: '/' },
    ],
    buttons:
        <>
            {/* <button type='button' className='linkProductos' >
            Categorías
        </button> */}
            <div class="dropdown">
                <button class="linkProductos dropdown-toggle" type="button" id="dropdownCategories" data-bs-toggle="dropdown" aria-expanded="false">
                    Categorías
                </button>
                <ul class="dropdown-menu" aria-labelledby="dropdownCategories">
                    <li><a class="dropdown-item" href="/">Action</a></li>
                    <li><a class="dropdown-item" href="/">Another action</a></li>
                    <li><a class="dropdown-item" href="/">Something else here</a></li>
                </ul>
            </div>
        </>
}


const ItemListContainer = () => {
    return (
        <div className='item-list-container' >
            <div className='item-list-body' >
                {/* --------------------------- */}
                <div className='background-container' >
                    <div className='background-header' >
                        <ContainerBar prop={cb} />
                    </div>
                    <div className='background-body' >
                        <div className='item-list-body-container' >
                            <ItemList/>
                        </div>
                    </div>
                </div>
                {/* --------------------------- */}
            </div>
        </div>)
}

export default ItemListContainer