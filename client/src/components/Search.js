import { useDispatch } from "react-redux"
import { turnOnModal } from "../actions/searchActions"


const Search = () => {
  const dispatch = useDispatch()
  

  return (
    <div className='header__central-content'>
        <div className="header__central-content__search">
            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" ><circle cx="6.5" cy="6.5" r="5.5" fill="none" stroke="#222" strokeWidth="2"/><path fill="#222" d="m10.586 9.172 4.242 4.242-1.414 1.414-4.242-4.242z"/></svg>
            <div onClick={()=>dispatch(turnOnModal())}>Search</div>
        </div>
        <div className="header__central-content__recommended">
            Recommended listings
        </div>
    </div>
  )
}

export default Search