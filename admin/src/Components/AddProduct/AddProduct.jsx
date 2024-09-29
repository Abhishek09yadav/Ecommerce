import React from 'react';
import './AddProduct.css'

import upload_area from '../../assets/upload_area.svg'

function AddProduct(props) {
    const [image, setImage] = React.useState(false);
    const [productDetails, setProductDetails] = React.useState({
        name: '',
        image: '',
        category: 'women',
        new_price: '',
        old_price: '',

    });
    const imagehandeler = event => {
        setImage(event.target.files[0])
    }
    const changeHandler = (e) => {
        setProductDetails({...productDetails, [e.target.name]: e.target.value})
    }
    const Add_Product = async () => {
        console.log('ProductDetails', productDetails);
        let responseData;
        let product = productDetails;
        let formData = new FormData();
        formData.append('product', image)
        await fetch('http://localhost:4000/upload', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
            },
            body: formData,

        }).then(res => res.json()).then((data) => {
            responseData = data
        }).catch(error => {
            console.error('Error during file upload:', error);
        });
        
        if (responseData.success) {
            product.image = responseData.image_url;
            console.log(product);
        }
    }

    return (
        <div className="AddProduct">
            <div className="AddProduct-itemfield">
                <p>Product Title</p>
                <input type='text' name='name' value={productDetails.name} onChange={changeHandler}
                       placeholder='Type Here'/>
            </div>
            <div className="AddProduct-price">
                <div className="AddProduct-itemfield">
                    <p>
                        Price
                    </p>
                    <input type='text' name='old_price' value={productDetails.old_price} onChange={changeHandler}
                           placeholder='Type Here'/>
                </div>
                <div className=" AddProduct-itemfield ">
                    <p>
                        Offer Price
                    </p>
                    <input type='text' name='new_price' value={productDetails.new_price} onChange={changeHandler}
                           placeholder='Type Here'/>
                </div>
            </div>

            <div className="AddProduct-itemfield">
                <p> Product Category</p>
                <select name={'category'} className={'AddProduct-selector '} value={productDetails.category}
                        onChange={changeHandler}
                >
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
                <button type="button" onClick={Add_Product}
                        className="AddProduct-btn btn btn-lg no-border no-focus-outline">ADD
                </button>
            </div>
        </div>
    );
}

export default AddProduct;