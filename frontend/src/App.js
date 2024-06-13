import './App.css';
import React from 'react';
import Navbar from "./Components/Navbar/Navbar";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Shop from "./Pages/Shop";
import ShopCategory from "./Pages/ShopCategory";


function App() {
    return (
        <div>
            <BrowserRouter>
                <Navbar/>
                <Routes>

                    <Route path='/' element={<Shop/>}/>
                    <Route path='/mens' element={<ShopCategory category='men'/>}/>
                    <Route path='/kids' element={<ShopCategory category='kid'/>}/>
                    <Route path='/women' element={<ShopCategory category='women'/>}/>
                </Routes>
            </BrowserRouter>

        </div>
    );
}

export default App;
