import React from 'react';
import './Offers.css'
import exclusive_image from '../Assets/exclusive_image.png'
//import Button from '@mui/material/Button';
import arrow_icon from '../Assets/arrow.png'

const Offers = () => {
    return (

        <div className="offers">
            <div className="offers-left">

                <h1>Exclusive</h1>
                <h1>Offers for you</h1>
                <h1>ONLY ON BEST SELLERS PRODUCTS</h1>

                <button type="button" className="btn btn-lg btn-danger rounded-pill"
                        style={{backgroundColor: '#ff4141', color: '#fff'}}> Check Now{' '}
                    <img src={arrow_icon} alt={''}/>
                </button>
                {/*<Button variant="contained">Check Now</Button>;*/}

            </div>
            <div className="offers-right">
                <img src={exclusive_image} alt={''}/>
            </div>


        </div>
    );
};

export default Offers;
