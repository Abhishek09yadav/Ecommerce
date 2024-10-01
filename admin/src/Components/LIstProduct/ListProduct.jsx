import React, {useEffect} from 'react';
import './ListProduct.css'
import cross_icon from '../../assets/cross_icon.png'

console.log(cross_icon);

function ListProduct(props) {
    const [allproducts, setAllProducts] = React.useState([]);
    const fetchInfo = async () => {
        await fetch('http://localhost:4000/allproducts')
            .then(res => res.json())
            .then(data => setAllProducts(data))
    }

    useEffect(() => {
        fetchInfo();
    }, []);
    return (
        <div className={'ListProduct'}>
            <h1>
                All Products List
            </h1>
            <div className="ListProduct-format-main">
                <p>Products</p><p>Title</p><p>Old Price</p><p>New Price</p><p>Category</p><p>Remove</p>
            </div>
            <div className="ListProduct-allproducts">
                <hr/>

                {allproducts.map((product, index) => (
                    <div key={index} className="ListProduct-format-main">
                        <img src={product.image} alt="" className="ListProduct-product-icon"/>
                        <p>{product.name}</p>
                        <p>${product.old_price}</p>
                        <p>${product.category}</p>
                        <img className="ListProduct-remove-icon" src={cross_icon} alt=""/>

                    </div>))}


            </div>

        </div>
    );
}

export default ListProduct;