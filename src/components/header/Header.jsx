//react
import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
// public_icons
import Logo from '/src/assets/icons/logo';
// scss
import './header.scss'
//utils
import { getLocal, deleteLocalStrgKey } from '/src/utils/localStorage/index.js';
//constant
import { ACCESS_TOKEN } from '/src/const/index.js';
import { logoutUser } from '/src/redux/redux-slides/userReduxSlides';
//sweet alert
import Swal from 'sweetalert2';


//======================================================

function Header() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { cartList } = useSelector(state => state.productReducer)
    const { profileData } = useSelector((state) => state.userReduxSlides)
    const { avatar } = profileData
    const handleNavigate = () => {
        navigate('/profile')
    }
    const handleLogout = () => {
        deleteLocalStrgKey(ACCESS_TOKEN)
        dispatch(logoutUser())
        navigate('/login')
        Swal.fire(
            'Success!',
            'You have been navigated to Login.',
            'success'
          )
    }
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
                                    <p>({cartList.length})</p>
                                </div>
                            </NavLink>
                        </li>
                        <li>
                            {avatar
                                ? <img onClick={handleNavigate} style={{ width: 40, height: 40, borderRadius: '50%' }} src={avatar} alt="..." />
                                : (getLocal(ACCESS_TOKEN) ? <NavLink to={'/profile'}>Go to profile</NavLink> : <NavLink to={'/register'}>Register</NavLink>)}
                        </li>
                        <li>
                            {getLocal(ACCESS_TOKEN)
                                ? <button className='logout_btn' onClick={handleLogout}>Log out</button>
                                : (getLocal(ACCESS_TOKEN) ? <NavLink to={'/profile'}></NavLink> : <NavLink to={'/login'}>Login</NavLink>)}
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
