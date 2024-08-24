import React from 'react';
import './CartItems.css'
import all_product from "../Assets/all_product";
import {ShopContext} from "../../Context/ShopContext";
import remove_icon from "../Assets/cart_cross_icon.png";

const CartItems = () => {
    const {all_product, cartItems, addToCart, removeFromCart} =
        useContext(ShopContext);
    return (
        <div className={'CartItems'}>
            <div className="CartItems-format-main">
                <p>Products</p>
                <p>Title</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Total</p>
                <p>Remove</p>

            </div>
            <hr/>
            <div>
                <div className="CartItems-format">
                    <img src="" alt="" className="CartIcons-product-icon"/>
                    <p></p>
                    <p></p>
                    <button className="CartItems-quantity">

                    </button>
                    <p></p>
                    <img className="CartItems-image" src="" alt=""/>
                </div>
            </div>
        </div>
    );
};

export default CartItems;
