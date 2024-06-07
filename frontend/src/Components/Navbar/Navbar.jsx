import React, {useState} from 'react';
import "./Navbar.css"

import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


function Navbar(props) {

    const [menu, setmenu] = useState("shop");
    return (<div className="navbar">
            <div className="nav-logo">
                <img src={logo}/>
                <p>SHOPPER</p>
            </div>
            <ul className="nav-menu">
                <li onClick={() => {
                    setmenu("shop")
                }}>Shop
                </li>
                <li onClick={() => {
                    setmenu("mens")
                }}>Men
                </li>
                <li onClick={() => {
                    setmenu("womens")
                }}>Women
                </li>
                <li onClick={() => {
                    setmenu("kids")
                }}>Kids
                </li>
            </ul>
            <ul className="nav-login-cart">
                <button type="button" className="btn btn-secondary rounded-pill">Login</button>
                <img src={cart_icon} alt="" className=""/>
                <div className="nav-cart-count">0</div>
            </ul>


        </div>

    );
}

export default Navbar;