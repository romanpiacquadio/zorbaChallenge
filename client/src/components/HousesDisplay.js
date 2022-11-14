import React, {useEffect, useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Cards from './Cards'
import { orderHomes } from '../actions/housesActions'


const HousesDisplay = () => {
    const results = useSelector( state => state.houses.homesByStatus.length )
    const loaded = useSelector( state => state.houses.loaded )
    console.log(loaded);
    console.log(results);


    const [filter, setFilter] = useState({
        date: '',
        status: ''
    })
  
    const dispatch = useDispatch()

    useEffect(() => {
        if(filter.date==='Newest' || filter.date==='Oldest' || filter.status==='Active' || filter.status==='Sold' ) {
            dispatch ( orderHomes(filter) ) 
        }
        
    }, [filter])


    const handleChange = (e) => {
        setFilter({
            ...filter,
            [e.target.id]: e.target.value
        })
    }

    return (
    <div className='houses-display'>
        <div className='filter-container'>
            <div className='zone-property-list-filters'>
                <div className='property-map-list-title'>
                    <h1>Homes for sale in Tampa</h1>
                    {loaded && <div>{results} listings found</div>}
                </div>
                <div className='zone-property-list-filters__controls-container'>
                    <div className='zone-property-list-filters__feed-settings'>
                        <select
                            id="date"
                            onChange={handleChange}
                        >
                            <option selected>--Order by date--</option>   
                            <option value="Newest">Newest First</option>
                            <option value="Oldest">Oldest First</option>
                        </select>
                        <select 
                            id="status" 
                            onChange={handleChange}
                        >
                            <option selected>--Filter By Status--</option>
                            <option value="Active">Active</option>
                            <option value="Sold">Sold</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
        <div className='list-container'>
            <Cards />
        </div>
    </div>
  )
}

export default HousesDisplay