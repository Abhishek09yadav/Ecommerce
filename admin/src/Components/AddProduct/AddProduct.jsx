import React from 'react';
import './AddProduct.css'

function AddProduct(props) {
    return (
        <div className="AddProduct">
            <div className="AddProduct-itemfield">
                <p>
                    Product Title
                </p>
                <input type='text' name='name' placeholder='Type Here'/>
            </div>
            <div className="AddProduct-price">
                <p>
                    Price
                </p>
                <input type='text' name='old_price' placeholder='Type Here'/>
            </div>
            <div className="AddProduct-price">
                <p>
                    Offer Price
                </p>
                <input type='text' name='new_price' placeholder='Type Here'/>
            </div>
            <div className="AddProduct-itemfield">
                <p> Product Category</p>
            </div>
        </div>
    );
}

export default AddProduct;