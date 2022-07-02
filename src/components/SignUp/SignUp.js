import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.inite'
const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const [createUserWithEmailAndPassword, user] = useCreateUserWithEmailAndPassword(auth);
    const navigate = useNavigate();


    const handleEmailBlur = (event) => {
        setEmail(event.target.value)
    }

    const handlePasswordBlur = event => {
        setPassword(event.target.value)
    }
    const handleConfirmPassword = event => {
        setConfirmPassword(event.target.value)
    }

    if (user) {
        navigate('/shop')
    }

    const handleCreateUser = event => {
        event.preventDefault();
        if (password !== confirmPassword) {
            setError('you password is not match')
            return;
        }
        if (password.length < 6) {
            setError('password must be 6 digit')
            return;
        }
        createUserWithEmailAndPassword(email, password);
    }
    return (
        <div className='form-container'>
            <div>
                <h2 className='form-title'>Sign Up</h2>
                <form onSubmit={handleCreateUser}>
                    <div className="input-group">
                        <label htmlFor="">Email</label>
                        <input onBlur={handleEmailBlur} type="email" name="Email" id="" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="">Password</label>
                        <input onBlur={handlePasswordBlur} type="password" name="Password" id="" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="">Confirm Password</label>
                        <input onBlur={handleConfirmPassword} type="password" name="Confirm-Password" id="" required />
                    </div>
                    <input className='form-submit' type="submit" value="Sign Up" />
                </form>
                <p style={{ color: 'red' }}>{error}</p>
                <p>Already have an account? <Link className='form-link' to='/login'>Login</Link></p>
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

export default SignUp;