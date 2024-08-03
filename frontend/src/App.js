import './App.css';
import React from 'react';
import Navbar from "./Components/Navbar/Navbar";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Shop from "./Pages/Shop";
import ShopCategory from "./Pages/ShopCategory";
import Product from "./Pages/Product";
import Footer from "./Components/Footer/Footer";


function App() {
    return (
        <div>
            <BrowserRouter>
                <Navbar/>
                <Routes>

                    <Route path='/' element={<Shop/>}/>
                    <Route path='/mens' element={<ShopCategory category='men'/>}/>
                    <Route path='/kids' element={<ShopCategory category='kid'/>}/>
                    <Route path='/womens' element={<ShopCategory category='women'/>}/>
                    <Route path='product' element={<Product/>}/>
                    <Route path=':productId' element={<Product/>}/>

                </Routes>
                <Footer/>
            </BrowserRouter>

        </div>
    );
}

export default App;
