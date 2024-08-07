import React, {useState} from 'react';
import "./Navbar.css"
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import {Link} from "react-router-dom";


function Navbar(props) {

    const [menu, setmenu] = useState("shop");

    const scrollDown = () => {
        window.scrollBy(0, 110);
    }
    return (<div className="navbar">
            <div className="nav-logo">
                <img src={logo}/>
                <p>SHOPPER</p>
            </div>
            <ul className="nav-menu">
                <li onClick={() => {
                    setmenu("shop")
                }}><Link to={'/'}>Shop</Link> {menu === 'shop' ? <hr/> : <></>}</li>
                <li onClick={() => setmenu('mens')}><Link to='/mens'>Men</Link> {menu === 'men' ? <hr></hr> : <></>}
                </li>
                <li onClick={() => {
                    setmenu("womens")
                }}><Link to={'/womens'}>Women</Link> {menu === 'womens' ? <hr/> : <></>}
                </li>
                <li onClick={() => {
                    setmenu("kids")
                }}><Link to={'/kids'}>Kids</Link> {menu === 'kids' ? <hr/> : <></>}
                </li>
            </ul>
            <ul className="nav-login-cart">
                < Link to={'/login'}>
                    <button type="button" className="btn btn-secondary rounded-pill" onClick={scrollDown}>Login</button>
                </Link>
                <Link to='/cart'> <img src={cart_icon} alt="" className=""/>

                </Link>
                <div className="nav-cart-count">0</div>
            </ul>


        </div>

    );
}

export default Navbar;