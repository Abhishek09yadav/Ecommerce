import React, {useContext} from 'react';

import './CSS/ShopCategory.css'
import {ShopContext} from "../Context/ShopContext";
import dropdown_icon from '../Components/Assets/dropdown_icon.png';
import Item from '../Components/item/item'

const ShopCategory = (props) => {
    const {all_product} = useContext(ShopContext);
    return (
        <div className="shop-category">
            <img src={props.banner} alt="" className={'shopcategory-banner'}/>
            <div className="shopcategory-indexSort">
                <p>
                    <span>Showing 1-12 </span> out of 36 products
                </p>
                <span className={'shopcategory-sort'}>Sort by <img src={dropdown_icon} alt="dropdown_icon"/></span>
            </div>
            <div className="shopcategory-products">
                {all_product && all_product.length > 0 ? (
                    all_product.map((item, i) => {
                        if (props.category === item.category) {
                            return (
                                <Item key={i} id={item.id} name={item.name}
                                      image={item.image} new_price={item.new_price}
                                      old_price={item.old_price}/>
                            );
                        } else {
                            return null;
                        }
                    })
                ) : (
                    <p>No products found</p> // Fallback in case of no products
                )}
            </div>
            <button className={'btn btn-sm shopcategory-loadmore'}>Explore more</button>
        </div>
    );
};

export default ShopCategory;