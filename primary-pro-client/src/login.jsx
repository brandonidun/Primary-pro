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
        console.log('Sign-up successful!');
    };
    
        return (  
        <div className='sign-in-page'>
            <div className="signin-header">
                <h1>PrimaryPro</h1>
            </div>
        
            <div className="sign-in-container">
                <div className='container-writings'>
                    <h1>Sign In!</h1>
                    <p>
                        First year student? Great! Enter your email and password below to sign in, or create an account to get started.
                    </p>
                    <p>
                        *Indicates required fields.
                    </p>
                </div>

                <div className="sign-in-form-div">
                    <form id='sign-in-form' onSubmit={handleSubmit}>
                        <div className='login-username'>
                            <label htmlFor="username">Username *</label>
                            <input
                            type="text"
                            id="username"
                            value={username}
                            onChange={handleUsernameChange}
                            />
                        </div>
                        <div className='login-password'>
                            <label htmlFor="password">Password  *</label>
                            <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={handlePasswordChange}
                            />
                        </div>
                        <button type="submit">
                            Sign In!
                        </button>
                        <a href="">
                            forgot password?
                        </a>
                    </form>
                </div>
            </div>
        </div>
    );
}
 
export default Login;