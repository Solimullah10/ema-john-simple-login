import React, { useState } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.inite';
import './Login.css'

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const navigate = useNavigate();



    const handleEmailBlur = even => {
        setEmail(even.target.value);
    }
    const handlePasswordBlur = event => {
        setPassword(event.target.value);
    }
    if (user) {
        navigate('/shop');
    }
    const handleLoginUser = e => {
        e.preventDefault();
        signInWithEmailAndPassword(email, password)
    }


    return (
        <div className='form-container'>
            <div>
                <h2 className='form-title'>Login</h2>
                <form onSubmit={handleLoginUser}>
                    <div className="input-group">
                        <label htmlFor="">Email</label>
                        <input onBlur={handleEmailBlur} type="email" name="Email" id="" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="">Password</label>
                        <input onBlur={handlePasswordBlur} type="password" name="Password" id="" required />
                    </div>
                    <p style={{ color: 'red' }}>{error?.message}</p>
                    {
                        loading && <p>Loading....</p>
                    }
                    <input className='form-submit' type="submit" value="Login" />
                </form>
                <p>new to ema-john? <Link className='form-link' to='/signup'>Create an account</Link></p>
                <div className='style-or'>
                    <div className='style-or-border'> <hr /></div>
                    <div className='margin-for-or'>or</div>
                    <div className='style-or-border'> <hr /></div>
                </div>

                <div className="google-sign-btn">
                    <button className='google-btn'>
                        <img className='google-icon' src="google-icon.jpg" alt="" />
                        <p>Continue With Google</p>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Login; <h2>This is login page</h2>