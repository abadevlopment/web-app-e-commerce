import React from 'react';
import './CartWidget.scss';

const CartWidget = () => {
  return (
    <button type='button' className='navCart'>
      <div className='cartIcon'>
        <img
          src='https://res.cloudinary.com/dvinxey2w/image/upload/v1642370025/ABA/ICONS%2032PX/cart-09_gfutyv.svg'
          className='cartImg'
          alt='cart-icon'
        />
      </div>
      <div className='cartArrow'>
        <img
          src='https://res.cloudinary.com/dvinxey2w/image/upload/v1643252820/ABA/ICONS%2032PX/arrow-58_bzxo4b.svg'
          className='arrowImg'
          alt='arrow-icon'
        />
      </div>
      <div className='cartQty'>
        <span className='qtySpan' >9999</span>
      </div>
      <div className='cartTotal'>S/.99999.99</div>
    </button>
  );
};

export default CartWidget;
