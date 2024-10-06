import React, {useState} from 'react';

import './CSS/LoginSignup.css'


const LoginSignup = () => {
    const [formData, setFormData] = useState({
        username: '',
        password: '',
        email: '',
    })
    const Login = () => {
        console.log('Logging in...');

    };
    const changeHandler = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value});
    }

    const SignUp = () => {
        console.log('Signing up...');

    };
    const [state, setState] = useState("Login")
    return (
        <div className="login-signup">
            <div className="login-signup-cointainer">
                <h1>{state}</h1>
                <div className="login-signup-fields">
                    {state === 'SignUp' ?
                        <input onChange={() => {
                            changeHandler(e)
                        }} name={'username'} value={''} type={'text'} placeholder={'Your Name'}/> : <></>}
                    <input type={'email'} placeholder={'Your Email'}/>
                    <input type={'password'} placeholder={'Your Password'}/>
                </div>
                <button onClick={() => {
                    state === 'Login' ? Login() : SignUp()
                }} className="btn btn-lg login-signup-button">{state}</button>
                {state === 'SignUp' ? <p className={'login-signup-login'}>Already have an account <span onClick={() => {
                    setState('Login')
                }}>Login</span></p> : ''}
                {state === 'Login' ? <p className={'login-signup-login'}>Create an account <span onClick={() => {
                    setState('SignUp')
                }}>Sign Up</span></p> : ''}
                <div className="login-signup-agree">
                    <input type={'checkbox'} name={''} id={''}/>
                    <span>{' '}By continuing, I agree to terms of use and privacy policy</span>
                </div>
            </div>
        </div>
    );
};

export default LoginSignup;