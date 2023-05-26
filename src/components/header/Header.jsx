import React from 'react'
import { NavLink } from 'react-router-dom'
import Logo from '/src/assets/icons/logo';
import SearchIcon from '/src/assets/icons/SearchIcon'
import './header.scss'
import { useSelector } from 'react-redux';


function Header() {
    const { cartList } = useSelector(state => state.productReducer)
    const sumCart = cartList?.reduce((sum, product) => sum + product.count,0) || 0

  return (
    <>
    
        <header className='header'>
            <div className="left_header">
                <NavLink to={'/'}>
                    <Logo></Logo>
                </NavLink>
            </div>
           <div className="right_header">
                <ul>
                    {/* <li>
                        <NavLink to={'/'}>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to={'/profile'}>Profile</NavLink>
                    </li>
                    <li>
                        <NavLink to={'/detail'}>Detail</NavLink>
                    </li> */}
                    <li>
                        <NavLink to={'/search'}>
                            <div className="li_wrapper">
                            <img src="/src/assets/icons/searchIcon.svg" alt="..." />
                            <p>Search</p>
                            </div>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={'/cart'}>
                        <div className="li_wrapper">
                        <img src="/src/assets/icons/cartIcon.svg" alt="..." />
                        <p>({sumCart})</p>
                        </div>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={'/register'}>Register</NavLink>
                    </li>
                    <li>
                        <NavLink to={'/login'}>Login</NavLink>
                    </li>
                </ul>
           </div>
            </header>
             <div className="type_bar">
             <ul>
                 <li><NavLink className='active_link'>Home</NavLink></li>
                 <li><NavLink>Men</NavLink></li>
                 <li><NavLink>Woman</NavLink></li>
                 <li><NavLink>Kid</NavLink></li>
                 <li><NavLink>Sport</NavLink></li>
             </ul>
         </div>
    </>
    
  )
}

export default Header;
