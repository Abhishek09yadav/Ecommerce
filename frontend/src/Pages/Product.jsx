import React, {useContext} from 'react';
import {ShopContext} from "../Context/ShopContext";
import {useParams} from "react-router-dom";
import Breadcrum from "../Components/Breadcrums/Breadcrum";

function Product(props) {
    const {all_products} = useContext(ShopContext);
    const {productid} = useParams()
    const product = all_products.find(e => e.id === Number(productid))
    return (

        <div>
            <Breadcrum product={product}/>
        </div>
    );
}

export default Product;