import React, {useState, useEffect} from 'react';
import Hero from "../Components/Hero/Hero";
import Item from "../Components/item/item";
import Popular from "../Components/Popular/Popular";
import Offers from "../Components/Offers/Offers";
import NewCollections from "../Components/NewCollections/NewCollections";

const Shop = () => {
    return (
        <>
            <Hero/>
            <Popular/>
            <Offers/>
            <NewCollections/>
        </>
    )
}
export default Shop;