import React, {useState} from 'react';

import './CSS/LoginSignup.css'


const LoginSignup = () => {
    const url = process.env.REACT_APP_API_URL;
    const [formData, setFormData] = useState({email: '', password: '', otp: ''});
    const [showOtpField, setShowOtpField] = useState(false);

    const sendOTP = async () => {
        let responseData;
        await fetch(`${url}/sendOTP`, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({email: formData.email}),
        })
            .then((res) => res.json())
            .then((data) => {
                responseData = data;
            });

        if (responseData.success) {
            alert('OTP sent to your email');
            setShowOtpField(true);
        } else {
            alert(responseData.message);
        }
    };

    const verifyOTP = async () => {
        let responseData;
        await fetch(`${url}/verifyOTP`, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({email: formData.email, otp: formData.otp}),
        })
            .then((res) => res.json())
            .then((data) => {
                responseData = data;
            });

        if (responseData.success) {
            localStorage.setItem('auth-token', responseData.token);
            window.location.replace('/');
        } else {
            alert(responseData.message);
        }
    };

    const changeHandler = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value});
    };

    return (
        <div className="login-signup">
            <div className="login-signup-container">
                <h1>Login</h1>
                <div className="login-signup-fields">
                    <input
                        required
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={changeHandler}
                        placeholder="Your Email"
                    />
                    {showOtpField && (
                        <input
                            required
                            type="text"
                            name="otp"
                            value={formData.otp}
                            onChange={changeHandler}
                            placeholder="Enter OTP"
                        />
                    )}
                </div>
                {!showOtpField ? (
                    <button onClick={sendOTP} className="btn btn-lg login-signup-button">
                        Send OTP
                    </button>
                ) : (
                    <button onClick={verifyOTP} className="btn btn-lg login-signup-button">
                        Verify OTP
                    </button>
                )}
                <div className="login-signup-agree">
                    <input type="checkbox"/>
                    <span> By continuing, I agree to terms of use and privacy policy</span>
                </div>
            </div>
        </div>
    );
};


export default LoginSignup;