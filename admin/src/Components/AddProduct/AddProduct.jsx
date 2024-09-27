import React from 'react';
import './AddProduct.css'

import upload_area from '../../assets/upload_area.svg'

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
                <select name={'category'} className={'AddProduct-selector'}>
                    <option value={'women'}>Women</option>
                    <option value={'men'}>Men</option>
                    <option value={'kid'}>Kid</option>
                </select>
                <div className="AddProduct-itemfield">
                    <label htmlFor={'file-input'}>
                        <img src={upload_area} className={'AddProduct-thumbnail-image'} alt={''}/>
                    </label>
                    <input type='file' name={'image'} id='file-input' style={{display: 'none'}} hidden={true}/>
                </div>
                <button type="button" className="AddProduct-btn btn btn-lg">ADD</button>
            </div>
        </div>
    );
}

export default AddProduct;