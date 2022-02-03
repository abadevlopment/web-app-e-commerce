import React from 'react';
import './RightBar.scss'
import CartWidget from '../Cart/CartWidget';
import Ad from '../Ads/Ad';

const RightBar = () => {
  return (
    <div className='rightBar' >
    <div className='rcHeader' >
      <CartWidget />
    </div>
    <div className='rcBody' >
      <div className='bodyAds' >
        <Ad />
      </div>
      <div className='bodyExtra' >
        extra
      </div>
    </div>
  </div>

  );
};

export default RightBar;
