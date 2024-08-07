import React from 'react';

import './CSS/LoginSignup.css'

const LoginSignup = () => {
    return (
        <div className="login-signup">
            <div className="login-signup-cointainer">
                <h1>Sign Up</h1>
                <div className="login-signup-fields">
                    <input type={'text'} placeholder={'Your Name'}/>
                    <input type={'email'} placeholder={'Your Email'}/>
                    <input type={'password'} placeholder={'Your Password'}/>
                </div>
                <button className="btn button">Sign Up</button>
                <p className={'login-signup-login'}>Already have an account <span>Login</span></p>
                <div className="login-signup-agree">
                    <input type={'checkbox'} name={''} id={''}/>
                    <span>{' '}By continuing, I agree to terms of use and privacy policy</span>
                </div>
            </div>
        </div>
    );
};

export default LoginSignup;