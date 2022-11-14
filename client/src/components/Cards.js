import React from 'react'
import { useSelector } from 'react-redux'
import Card from './Card'
import Offer from './Offer'

const Cards = () => {
    const houses = useSelector(state => state.houses.homesByStatus)
    const loading = useSelector(state => state.houses.loading)

  return (
    <> 
        {loading ? <p>Loading...</p> : null}
        {houses?.map ((house, index) => (
            <>
                <Card 
                    key={house._id} 
                    images={house.images} 
                    price={house.purchasePrice}
                    bedroom={house.units[0].bedroom} 
                    bathroom={house.units[0].bathroom} 
                    squareFootage={house.units[0].squareFootage}
                    streetNumber={house.addressObject.streetNumber}  
                    route={house.addressObject.route} 
                    locality={house.addressObject.locality}  
                    stateCode={house.addressObject.stateCode}  
                />
                {index===1 && <Offer />}
            </>
        ))}
    </>
  )
}

export default Cards