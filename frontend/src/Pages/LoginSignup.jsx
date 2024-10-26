import React, {useState} from 'react';

import './CSS/LoginSignup.css'


const LoginSignup = () => {
    const url = process.env.REACT_APP_API_URL;
    const [formData, setFormData] = useState({
        username: '',
        password: '',
        email: '',
    })
    const Login = async () => {
        console.log('Logging in...', formData);
        let responseData;
        await fetch(`${url}/login`, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',

            },
            body: JSON.stringify(formData)
        }).then(res => res.json()).then((data) => {
            responseData = data
        })
        if (responseData.success) {
            localStorage.setItem('auth-token', responseData.token);
            window.location.replace('/');
        } else {
            alert(responseData.error);
            console.log('responseData', responseData);
        }
    };
    const changeHandler = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value});
    }

    const SignUp = async () => {
        console.log('Signing up...', formData);
        let responseData;
        await fetch(`${url}/signup`, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',

            },
            body: JSON.stringify(formData)
        }).then(res => res.json()).then((data) => {
            responseData = data
        })
        if (responseData.success) {
            localStorage.setItem('auth-token', responseData.token);
            window.location.replace('/');
        } else {
            alert(responseData.error);
            console.log('responseData', responseData);
        }

    };
    const [state, setState] = useState("Login")
    return (
        <div className="login-signup">
            <div className="login-signup-cointainer">
                <h1>{state}</h1>
                <div className="login-signup-fields">
                    {state === 'SignUp' ?
                        <input onChange={
                            changeHandler
                        } name={'username'} value={formData.username} type={'text'}
                               placeholder={'Your Name'}/> : <></>}
                    <input required type={'email'} name={'email'} value={formData.email} onChange={
                        changeHandler
                    } placeholder={'Your Email'}/>
                    <input type={'password'} name={'password'} value={formData.password} onChange={
                        changeHandler
                    }
                           placeholder={'Your Password'}/>
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