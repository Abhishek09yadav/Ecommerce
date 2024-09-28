import React from 'react';
import './AddProduct.css'

import upload_area from '../../assets/upload_area.svg'

function AddProduct(props) {
    const [image, setImage] = React.useState(false);
    const [productDetails, setProductDetails] = React.useState({
        name: '',
        image: '',
        category: '',
        new_price: '',
        old_price: '',

    });
    const imagehandeler = event => {
        setImage(event.target.files[0])
    }
    const changeHandler = (e) => {
        setProductDetails(...productDetails, [])
    }

    return (
        <div className="AddProduct">
            <div className="AddProduct-itemfield">
                <p>
                    Product Title
                </p>
                <input type='text' name='name' placeholder='Type Here'/>
            </div>
            <div className="AddProduct-price">
                <div className="AddProduct-itemfield">
                    <p>
                        Price
                    </p>
                    <input type='text' name='old_price' placeholder='Type Here'/>
                </div>
                <div className=" AddProduct-itemfield ">
                    <p>
                        Offer Price
                    </p>
                    <input type='text' name='new_price' placeholder='Type Here'/>
                </div>
            </div>

            <div className="AddProduct-itemfield">
                <p> Product Category</p>
                <select name={'category'} className={'AddProduct-selector '}>
                    <option value={'women'}>Women</option>
                    <option value={'men'}>Men</option>
                    <option value={'kid'}>Kid</option>
                </select>
                <div className="AddProduct-itemfield">
                    <label htmlFor={'file-input'}>
                        <img src={image ? URL.createObjectURL(image) : upload_area}
                             className={'AddProduct-thumbnail-image'}
                             alt={''}/>
                    </label>
                    <input onChange={imagehandeler} type='file' name={'image'} id='file-input' style={{display: 'none'}}
                           hidden={true}/>
                </div>
                <button type="button" className="AddProduct-btn btn btn-lg no-border no-focus-outline">ADD</button>
            </div>
        </div>
    );
}

export default AddProduct;