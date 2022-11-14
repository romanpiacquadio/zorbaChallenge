import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getHomesAction } from '../actions/housesActions'
import Header from '../components/Header';
import Body from '../components/Body';
import SearchModal from '../components/SearchModal';


const Layout = () => {
  const searchModal = useSelector(state => state.search.searchModal)
  const dispatch = useDispatch()

  useEffect(()=> {
      dispatch ( getHomesAction() )
  }, [])

  return (
    <div>
        {searchModal ? 
          (<SearchModal />) : 
          (<>
              <Header/> 
              <Body />
            </>)
        }
    </div>
  )
}

export default Layout