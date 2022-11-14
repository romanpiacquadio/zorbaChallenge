import Opendoor from "./Opendoor"
import Search from "./Search"
import Options from "./Options"

const Header = ( ) => {
  
  return (
    <div className="header">
      <div className="header-main">
        <Opendoor />
        <Search />
        <Options />
      </div>
    </div>
  )
}

export default Header