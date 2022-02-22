import React from 'react'
import AdLarge from '../ads/AdLarge'
import SaleListContainer from '../sales/SaleListContainer'
import './Start.scss'

const Start = () => {
  return (
    <div className='start-container' >
      <div className='extra-container' >
        <div className='ad1-container' >
          <AdLarge />
        </div>
      </div>
      <div className='start-body' >
        <SaleListContainer/>
        {/* --------------------------- */}
        {/* <div className='background-container' >
          <div className='background-header' >
            header
          </div>
          <div className='background-body' >
            body
          </div>
        </div> */}
        {/* --------------------------- */}
      </div>
    </div>
  )
}

export default Start