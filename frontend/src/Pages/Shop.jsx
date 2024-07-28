import React, {useState, useEffect} from 'react';
import Hero from "../Components/Hero/Hero";
import Item from "../Components/item/item";
import Popular from "../Components/Popular/Popular";
import Offers from "../Components/Offers/Offers";
import NewCollections from "../Components/NewCollections/NewCollections";
import NewsLetter from "../Components/NewsLetter/NewsLetter";
import Footer from "../Components/Footer/Footer";
// import './Shop.css' // not needed for now

const Shop = () => {
    return (
        <div className="shop-container">
            <Hero/>
            <Popular/>
            <Offers/>
            <NewCollections/>
            <NewsLetter/>
            <Footer/>
        </div>
    )
}
export default Shop;