import React from 'react'
import { Link } from 'react-router-dom'
import './SideBar.scss'

const SideBar = () => {
    return (
        <div className='side-bar'>
            <Link to='/' className='logo' >
                <img
                    src='https://res.cloudinary.com/dvinxey2w/image/upload/v1644191607/ABA/ads%20samples/guldencoin-2_o7loms.svg'
                    className='logo-img'
                    alt='logo-img'
                />
            </Link>
            <div className='buttons' >
                {/* <div className='squares' >
                        <button type='button' className='round-button' >
                            <img
                                src='https://res.cloudinary.com/dvinxey2w/image/upload/v1642370034/ABA/ICONS%2032PX/home-01_lwkzeq.svg'
                                className='button-img'
                                alt='btn img'
                            />
                        </button>
                    </div> */}
                {/* HOME BUTTON */}
                <div className='squares' >
                    <button type='button' className='round-button' >
                        <Link to='/' className='link-img' >
                            <img
                                src='https://res.cloudinary.com/dvinxey2w/image/upload/v1642370034/ABA/ICONS%2032PX/home-01_lwkzeq.svg'
                                className='button-img'
                                alt='btn img'
                            />
                        </Link>
                    </button>
                </div>
                {/* CATEGORY BUTTON */}
                <div className='squares dropend' >
                    <button type='button' className='round-button' data-bs-toggle="dropdown" aria-expanded="false">
                        <img
                            src='https://res.cloudinary.com/dvinxey2w/image/upload/v1642370029/ABA/ICONS%2032PX/category-07_nv7v6d.svg'
                            className='button-img'
                            alt='btn img'
                        />
                    </button>
                    <div class="dropdown-menu">
                        <h6 class="dropdown-header">Dropdown header</h6>
                        <div class="dropdown-divider"></div>
                        <a class="dropdown-item" href="/">New around here? Sign up</a>
                        <div class="dropdown-divider"></div>
                        <a class="dropdown-item" href="/">Forgot password?</a>
                        <div class="dropdown-divider"></div>
                        <a class="dropdown-item" href="/">Forgot password?</a>
                    </div>
                </div>
                {/* CART BUTTON */}
                <div className='squares' >
                    <button type='button' className='round-button' >
                        <Link to='/cart' className='link-img' >
                            <img
                                src='https://res.cloudinary.com/dvinxey2w/image/upload/v1642370025/ABA/ICONS%2032PX/cart-09_gfutyv.svg'
                                className='button-img'
                                alt='btn img'
                            />
                        </Link>
                    </button>
                </div>
                {/* DELIVERY BUTTON */}
                <div className='squares' >
                    <button type='button' className='round-button' >
                        <img
                            src='https://res.cloudinary.com/dvinxey2w/image/upload/v1642370032/ABA/ICONS%2032PX/delivery-21_zwqzcv.svg'
                            className='button-img'
                            alt='btn img'
                        />
                    </button>
                </div>
                {/* CONTACT BUTTON */}
                <div className='squares' >
                    <button type='button' className='round-button' >
                        <Link to='/contact' className='link-img' >
                            <img
                                src='https://res.cloudinary.com/dvinxey2w/image/upload/v1642718993/ABA/ICONS%2032PX/contact2-05_yuim2f.svg'
                                className='button-img'
                                alt='btn img'
                            />
                        </Link>
                    </button>
                </div>
            </div>
            {/* CONFIG BUTTON */}
            <div className='configuration' >
                <div className='squares dropend' >
                    <button type='button' className='round-button' data-bs-toggle="dropdown" aria-expanded="false" >
                        <img
                            src='https://res.cloudinary.com/dvinxey2w/image/upload/v1642719248/ABA/ICONS%2032PX/config-75_nf1q9y.svg'
                            className='button-img'
                            alt='cfg img'
                        />
                    </button>
                    <div class="dropdown-menu">
                        <h6 class="dropdown-header">Dropdown header</h6>
                        <div class="dropdown-divider"></div>
                        <a class="dropdown-item" href="/">New around here? Sign up</a>
                        <div class="dropdown-divider"></div>
                        <a class="dropdown-item" href="/">Forgot password?</a>
                        <div class="dropdown-divider"></div>
                        <a class="dropdown-item" href="/">Forgot password?</a>
                    </div>
                </div>
            </div>
            {/* ABA BUTTON */}
            <div className='aba' >
                <div className='squares dropend' >
                    <button type='button' className='round-button' data-bs-toggle="dropdown" aria-expanded="false" >
                        <img
                            src='https://res.cloudinary.com/dvinxey2w/image/upload/v1644191607/ABA/ads%20samples/guldencoin-2_o7loms.svg'
                            className='button-img'
                            alt='aba img'
                        />
                    </button>
                    <div class="dropdown-menu">
                        <div class="dropdown-item">TEST</div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default SideBar