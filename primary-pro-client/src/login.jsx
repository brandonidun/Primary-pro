import { Link } from 'react-router-dom';
import React, { useState } from 'react';


const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Perform sign-up logic here using username and password
        console.log('Sign-up successful!');
    };
    
        return (  
        <div className='sign-in-page'>
            <div className="header">
                <h1>PrimaryPro</h1>
            </div>
        
            <div className="sign-in-container">
                <div>Sign In!</div>
                <div className="sign-in-form-div">
                <form id='sign-in-form' onSubmit={handleSubmit}>
                <div>
                <label htmlFor="username">Username:</label>
                <input
                type="text"
                id="username"
                value={username}
                onChange={handleUsernameChange}
                />
                </div>
                <div>
                <label htmlFor="password">Password:</label>
                <input
                type="password"
                id="password"
                value={password}
                onChange={handlePasswordChange}
                />
                </div>
                <button type="submit">Sign Up</button>
                </form>
                </div>
            </div>
        </div>
    );
}
 
export default Login;