import React from 'react'
import './CartWidget.scss'
import CartWidgetModal from './CartWidgetModal'

const CartWidget = () => {
    return (
        <>
            {/* trigger modal */}
            <button type='button' className='cartWButton' data-bs-toggle="modal" data-bs-target="#cartWidgetModal" >
                <div className='cartWIcon' >
                    <img
                        src='https://res.cloudinary.com/dvinxey2w/image/upload/v1642370025/ABA/ICONS%2032PX/cart-09_gfutyv.svg'
                        alt='cart icon'
                        className='cartWImg'
                    />
                </div>
                <div className='cartWArrow' >
                    <img
                        src='https://res.cloudinary.com/dvinxey2w/image/upload/v1643252820/ABA/ICONS%2032PX/arrow-58_bzxo4b.svg'
                        alt='arrow icon'
                        className='arrowWImg'
                    />
                </div>
                <div className='cartQty' >
                    <p className='qtyspan' >99</p>
                </div>
                <div className='cartTotal' >S/.99999.99</div>
            </button>
            {/* modal */}
            <CartWidgetModal/>
        </>
    )
}

export default CartWidget