import React, {useContext, useRef, useState} from 'react';
import "./Navbar.css"
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import {Link} from "react-router-dom";
import {ShopContext} from "../../Context/ShopContext";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBars, faChevronRight, faSquareCaretRight} from '@fortawesome/free-solid-svg-icons';


function Navbar(props) {
    const {getTotalCartItems} = useContext(ShopContext);
    const [menu, setmenu] = useState("shop");
    const menuRef = useRef();
    const scrollDown = () => {
        window.scrollBy(0, 110);
    }
    const dropdown_toggle = (e) => {
        menuRef.current.classList.toggle('nav-menu-visible');
        e.target.classList.toggle('open');
    }
    return <div className="navbar">
        <div className="nav-logo">
            <img src={logo}/>
            <p>SHOPPER</p>
            <FontAwesomeIcon icon="fa-light fa-square-caret-right"/>
        </div>
        <FontAwesomeIcon onClick={dropdown_toggle} className={'nav-dropdown'} icon={faSquareCaretRight}/>

        <ul ref={menuRef} className="nav-menu">
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
            <div className="nav-cart-count">{getTotalCartItems()}</div>
        </ul>


    </div>;
}

export default Navbar;