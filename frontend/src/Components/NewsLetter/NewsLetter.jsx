import React from 'react';
import './NewsLetter.css'
import arrow_icon from "../Assets/arrow.png";

const NewsLetter = () => {
    return (
        <div className={'NewsLetter'}>
            <h1>Get Exclusive Offers On Your Email</h1>
            <p>Subscribe to our newletter and stay updated </p>
            <div className={'email'}>
                <input type={'email'} placeholder={'Email'}/>
                <button type='submit' className="btn"> Subscribe{' '}
                </button>
            </div>
        </div>


    );
};

export default NewsLetter;
