import React, { useState } from 'react'
import './Login.css'
import {Link, useHistory} from "react-router-dom";
import { auth } from './firebase';

function Login() {
    const history= useHistory();
    const [email,setEmail]=useState('');
    const[password,setPassword]=useState('');
    const logIn = e =>
    {
        e.preventDefault();
        auth.signInWithEmailAndPassword(email,password)
        .then(auth => {
            history.push('/');
        })
        .catch(error=>alert(error.message))
    }
    const register =e =>
    {
        e.preventDefault();
        auth.createUserWithEmailAndPassword(email,password)
        .then((auth) =>{
            //Succesfully created a new user
            console.log(auth);
            if(auth)
            {
                history.push('/');
            }
        })
        .catch(error => alert(error.message))

    }
    return (
        <div className="login">
            <Link to="/">
            <img className="login__logo" src="https://i.insider.com/539f3ffbecad044276726c01?width=1100&format=jpeg&auto=webp"></img>
            </Link>
            <div className="login__container">
                <h1>Login</h1>
                <form>
                    <h5>Email Address</h5>
                    <input type="text" value={email} onChange=
                    {e => setEmail(e.target.value)} />
                    <h5>Password</h5>
                    <input type="password" value={password} onChange=
                    {e => setPassword(e.target.value)} />
                    <button type="submit" onClick={logIn} className="login__btn">Login</button>

                </form>
                <p>By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.</p>
                <button  type="submit" onClick={register} className="register__btn">Create Account</button>
            </div>
        </div>
    )
}

export default Login
