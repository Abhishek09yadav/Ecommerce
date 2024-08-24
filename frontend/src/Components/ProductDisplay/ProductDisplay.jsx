import React, {useContext} from 'react';
import './ProductDisplay.css';
import star_icon from "../Assets/star_icon.png";
import star_dull_icon from "../Assets/star_dull_icon.png";
import arrow_icon from "../Assets/arrow.png";
import {ShopContext} from "../../Context/ShopContext";


const ProductDisplay = (props) => {
    // console.log(props)
    const {addToCart} = useContext(ShopContext);

    const {product} = props;
    return (
        <div className='productdisplay'>
            <div className="productdisplay-left">
                <div className="productdisplay-img-list">
                    <img src={product.image} alt=""/>
                    <img src={product.image} alt=""/>
                    <img src={product.image} alt=""/>
                    <img src={product.image} alt=""/>

                </div>
                <div className="productdisplay-img">
                    <img className='productdisplay-main-img' src={product.image} alt=""/>
                </div>
            </div>
            <div className="productdisplay-right">
                <h1>{product.name}</h1>
                <div className="productdisplay-right-star">
                    <img src={star_icon} alt="star"/>
                    <img src={star_icon} alt="star"/>
                    <img src={star_icon} alt="star"/>
                    <img src={star_icon} alt="star"/>
                    <img src={star_dull_icon} alt="star"/>
                    <p>(119)</p>
                </div>
                <div className="productdisplay-right-prices">
                    <span className="productdisplay-right-prices-old">
                        ${product.old_price}
                    </span>
                    <span className="productdisplay-right-prices-new">
                        ${product.new_price}
                    </span>
                </div>
                <div className="productdisplay-right-description">
                    A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and
                    short sleeves,
                    worn as an undershirt or outer garment.
                </div>
                <div className="productdisplay-right-size">
                    <h1> Select Size</h1>

                    <div className="productdisplay-right-sizes">
                        <div>S</div>
                        <div>M</div>
                        <div>L</div>
                        <div>XL</div>
                        <div>XXL</div>
                    </div>
                </div>
                <button type="button" className="btn btn-lg btn-danger "
                        style={{backgroundColor: '#ff4141', color: '#fff'}} onClick={() => {
                    addToCart(product.id);
                }}> Add To Cart{' '}
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor"
                         className="bi bi-cart4" viewBox="0 0 16 16">
                        <path
                            d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5M3.14 5l.5 2H5V5zM6 5v2h2V5zm3 0v2h2V5zm3 0v2h1.36l.5-2zm1.11 3H12v2h.61zM11 8H9v2h2zM8 8H6v2h2zM5 8H3.89l.5 2H5zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0m9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0"/>
                    </svg>
                </button>
                <p className={'productdisplay-right-category'}>
                    <span>Category : </span>Women, T-shirt, Crop Top
                </p>
                <p className={'productdisplay-right-category'}>
                    <span>Tags : </span>Modern, Latest
                </p>


            </div>
        </div>
    );
}

export default ProductDisplay;
