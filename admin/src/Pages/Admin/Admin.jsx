import React from 'react';
import './Admin.css'
import Sidebar from "../../Components/Sidebar/Sidebar.jsx";
import {Routes, Route} from "react-router-dom";
import AddProduct from "../../Components/AddProduct/AddProduct.jsx";
import ListProduct from "../../Components/LIstProduct/ListProduct.jsx";


function Admin(props) {
    return (
        <div className={'admin'}>
            <Sidebar/>

            <Routes>
                <Route path="/addproduct" element={<AddProduct/>}/>
                <Route path="/listproduct" element={<ListProduct/>}/>
            </Routes>
        </div>

    );
}

export default Admin;
