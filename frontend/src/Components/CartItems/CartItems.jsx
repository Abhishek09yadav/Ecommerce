import React, {useContext} from 'react';
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

                {all_product.map((e) => {
                    if (cartItems[e.id] > 0) {
                        return <div className="CartItems-format">
                            <img src={e.image} alt="" className="CartIcons-product-icon"/>

                            <p>{e.name}</p>
                            <p>${e.new_price}</p>

                            <button type="button" className="btn btn-sm  CartItems-quantity"
                                    style={{backgroundColor: '#ff4141', color: '#fff'}} onClick={() => {

                            }}> {cartItems[e.id]}

                            </button>

                            <p>{e.new_price * cartItems[e.id]}</p>
                            <img className="CartItems-image" src={remove_icon} onClick={() => {
                                removeFromCart(e.id)
                            }}/>

                            <i className="bi bi-plus"
                               onClick={() => addToCart(e.id)}
                               style={{cursor: 'pointer'}}>
                            </i>


                            <hr/>

                        </div>
                    }
                })}
            </div>
        </div>
    );
};

export default CartItems;
