import './App.css';
import React from 'react';
import Navbar from "./Components/Navbar/Navbar";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Shop from "./Pages/Shop";
import ShopCategory from "./Pages/ShopCategory";
import Product from "./Pages/Product";
import Footer from "./Components/Footer/Footer";
import men_banner from './Components/Assets/banner_mens.png'
import women_banner from "./Components/Assets/banner_women.png"
import kids_banner from "./Components/Assets/banner_kids.png"
import LoginSignup from "./Pages/LoginSignup";
import Cart from "./Pages/Cart";

import {transitions, positions, Provider as AlertProvider} from 'react-alert'
import AlertTemplate from 'react-alert-template-basic'
// Import Font Awesome CSS globally
import '@fortawesome/fontawesome-free/css/all.min.css';
// optional configuration
const options = {
    // you can also just use 'bottom center'
    position: positions.TOP_RIGHT,
    timeout: 4000,
    offset: '30px',
    // you can also just use 'scale'
    transition: transitions.SCALE
}

function App() {
    return (
        <div>
            <AlertProvider template={AlertTemplate} {...options}>
                <BrowserRouter>
                    <Navbar/>
                    <Routes>

                        <Route path='/' element={<Shop/>}/>
                        <Route path='/mens' element={<ShopCategory banner={men_banner} category='men'/>}/>
                        <Route path='/kids' element={<ShopCategory banner={kids_banner} category='kid'/>}/>
                        <Route path='/womens' element={<ShopCategory banner={women_banner} category='women'/>}/>
                        <Route path='/product' element={<Product/>}>
                            <Route path=':productId' element={<Product/>}/>
                        </Route>
                        <Route path='/login' element={<LoginSignup/>}/>
                        <Route path='/cart' element={<Cart/>}/>


                    </Routes>
                    <Footer/>
                </BrowserRouter>
            </AlertProvider>
        </div>
    );
}

export default App;
