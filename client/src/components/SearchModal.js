import React, {useState} from 'react'
import { Dialog } from '@headlessui/react'
import { useDispatch, useSelector } from 'react-redux'
import { turnOffModal } from '../actions/searchActions'
import { filterHomesAction } from '../actions/housesActions'

const SearchModal = () => {
  const [input, setInput] = useState('')

  const dispatch = useDispatch()
  const searchModal = useSelector( state => state.search.searchModal)
  
  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(filterHomesAction(input))
    dispatch( turnOffModal() )
  }

  return (
    <Dialog open={searchModal} onClose={() => dispatch( turnOffModal() )}>
      <Dialog.Panel>
        <form className='search-modal' onSubmit={handleSubmit}>
          <div className="search-modal__logo">
              <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15"><circle cx="6.5" cy="6.5" r="5.5" fill="none" stroke="#222" strokeWidth="2"/><path fill="#222" d="m10.586 9.172 4.242 4.242-1.414 1.414-4.242-4.242z"/></svg>
          </div>
          <input className='search-modal__input' placeholder='Address, city, zip' onChange={ (e) => setInput(e.target.value) }></input>
        </form>

      </Dialog.Panel>
    </Dialog>
  )
}

export default SearchModal