import React from 'react'   //using rfce you get the boiler plate
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { NavLink } from 'react-router-dom';
import { useStateValue } from './StateProvider';

function Header() {
const [{basket},dispatch] = useStateValue();

  return (
    <div className="header">
        <NavLink to="/"> 
       <img
        className="header__logo"
         src="data:image/png;base64,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"
         />
          </NavLink> 


        <div className="header__search">
                 <input
                     className="header__searchInput"
                     type="text" />
                     <SearchIcon className="header__searchIcon" type="text" />
                 {/*Logo*/}
             </div>
             <div className="header__nav">
                     <div className='header__option'>
                        <span className='header__optionLineOne'>Hello Guest</span>
                        <span className='header__optionLineTwo'>Sign In</span>
                     </div>

                     <div className='header__option'>
                     <span className='header__optionLineOne'>Returns</span>
                        <span className='header__optionLineTwo'>Orders</span>
                     </div>

                     <div className='header__option'>
                     <span className='header__optionLineOne'>Your</span>
                        <span className='header__optionLineTwo'>Prime</span>
                     </div>
                  

                  <NavLink to="/checkout">
                  <div className="header__optionBasket" >
                   < ShoppingBasketIcon/>
                    <span className="header__optionalLineTwo  header__basketCount">
                        {basket?.length}</span>
                   </div>
                   </NavLink>
                 </div>
                 </div>
               
  )
}

export default Header