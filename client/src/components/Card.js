import React from 'react'
import numberWithCommas from '../helpers/numberWithCommas'

const Card = ({ images, price, bedroom, bathroom, squareFootage, streetNumber, route, locality, stateCode }) => {
  return (
    <div className='card-container'>
        <div className='photo-container'>
            <img src={images[0]} />
        </div>
        <div className='info-container'>
            <div className='info-container__price'>${numberWithCommas(price)}</div>
            <div className='info-container__details'>{bedroom}bd {bathroom}ba {squareFootage} ft &#178;</div>
            <div className='info-container__address'>{streetNumber} {route}</div>
            <div className='info-container__city'>{locality}, {stateCode}</div>
        </div>
    </div>
  )
}

export default Card