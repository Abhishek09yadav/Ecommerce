import React, {useContext} from 'react';
import {ShopContext} from "../Context/ShopContext";
import {useParams} from "react-router-dom";
import Breadcrum from "../Components/Breadcrums/Breadcrum";
import ProductDisplay from "../Components/ProductDisplay/ProductDisplay";

function Product(props) {
    const {all_product} = useContext(ShopContext);
    const {productId} = useParams()
    console.log(productId);
    console.log('context value is ', all_product[0])
    console.log('all_products:', all_product);
    const product = all_product.find((e) => e.id === Number(productId))


    return (

        <div>
            <Breadcrum product={product}/>
            <ProductDisplay product={product}/>
        </div>
    );
}

export default Product;