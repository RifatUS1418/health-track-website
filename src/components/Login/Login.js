import React, { useState } from 'react';
import { useHistory, useLocation } from 'react-router';
// import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Login.css';

const Login = () => {
    const { email, setEmail, password, setPassword, setError, signInUsingGoogle, loginProcess, registerNewUser, setName, error } = useAuth();
    const [haveAcc, setHaveAcc] = useState(false);
    const location = useLocation();
    const redirect_uri = location.state?.from || '/home';
    const history = useHistory();


    const toggleLogin = e => {
        setHaveAcc(e.target.checked);
    }

    const handleNameChange = e => {
        setName(e.target.value);
    }

    const handleEmailChange = e => {
        setEmail(e.target.value);
    }
    const handlePasswordChange = e => {
        setPassword(e.target.value);
    }

    const handleGoogleSignIn = () => {
        signInUsingGoogle()
            .then(result => {
                history.push(redirect_uri)
            })
    }

    const handleRegistrationAndLogin = e => {
        e.preventDefault();
        if (password.length < 6) {
            setError('Password must be at least 6 characters long.');
            return;
        }
        if (!/(?=.*[A-Z].*[A-Z])/.test(password)) {
            setError('Password must contain 2 upper case');
            return;
        }
        haveAcc ? loginProcess(email, password) : registerNewUser(email, password);
    }

    return (
        <div className='p-5 d-flex justify-content-center login-form'>
            <div className="login-card p-5">
                <h2 className="text-center title">Health Track Hospital</h2>
                <form onSubmit={handleRegistrationAndLogin}>
                    <h3 className="text-center">Please {haveAcc ? 'Login' : 'Register'}</h3>
                    {!haveAcc && <div class="mb-3 mx-5">
                        <div>
                            <label htmlFor="inputName" class="col-sm-2 col-form-label">Name</label>
                        </div>
                        <div className="col-sm-10">
                            <input type="text" onBlur={handleNameChange} className="form-control" id="inputName" placeholder="Your Name" />
                        </div>
                    </div>}
                    <div className="mb-3 mx-5">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                        <input onBlur={handleEmailChange} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required />
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div className="mb-3 mx-5">
                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                        <input onBlur={handlePasswordChange} type="password" className="form-control" id="exampleInputPassword1" required />
                    </div>
                    <div><p className="row mb-3 text-danger mx-5">{error}</p></div>
                    <button type="submit" className="btn btn-success mx-5">{haveAcc ? 'Login' : 'Register'}</button>
                    <div className="my-3 mx-5">
                        <div className="form-check">
                            <input onChange={toggleLogin} className="form-check-input" type="checkbox" id="gridCheck1" />
                            <label className="form-check-label" htmlFor="gridCheck1">
                                {!haveAcc ? 'Already have an Account?' : 'New? Register Please'}
                            </label>
                        </div>
                    </div>
                    {/* <p className="text-center">New to Health Track Hospital? <Link to="/register">Register</Link></p> */}
                    <p>-----------------------+++OR+++-------------------------</p>
                    <button onClick={handleGoogleSignIn} type="button" className="btn btn-warning mx-5 px-5 fw-bold">Google Sign In</button>
                </form>
            </div>
        </div>
    );
};

export default Login;