import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Signup = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [retypeEmail, setRetypeEmail] = useState('');
    const [password, setPassword] = useState('');
    const [retypePassword, setRetypePassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [phone, setPhone] = useState('');
    const [dateOfBirth, setDateOfBirth] = useState('');
    const [address, setAddress] = useState('');
  
    const handleUsernameChange = (e) => {
      setUsername(e.target.value);
    };
  
    const handleEmailChange = (e) => {
      setEmail(e.target.value);
    };
  
    const handleRetypeEmailChange = (e) => {
      setRetypeEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
      setPassword(e.target.value);
  };

    const handleRetypePasswordChange = (e) => {
      setRetypePassword(e.target.value);
  };
  
    const handleFirstNameChange = (e) => {
      setFirstName(e.target.value);
    };
  
    const handleLastNameChange = (e) => {
      setLastName(e.target.value);
    };
  
    const handlePhoneChange = (e) => {
      setPhone(e.target.value);
    };
  
    const handleDateOfBirthChange = (e) => {
      setDateOfBirth(e.target.value);
    };
  
    const handleAddressChange = (e) => {
      setAddress(e.target.value);
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      // Perform sign-up logic here using form values
      console.log('Sign-up successful!');
    };
  

  return (
    <div className='sign-up-page'>
      <div className="signup-header">
      <Link to="/">
                <h1>PrimaryPro</h1>
            </Link>
      </div>
      
      <div className="sign-up-container">
        <div className='signup-container-writings'>
          <h1>Create Your Account</h1>
        </div>
        <div className="signup-form-div">
        <form id= "sign-up-form"onSubmit={handleSubmit}>
        <div className='signup-email'>
          <label htmlFor="email">Email Address *</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
          />
        </div>
        <div className='signup-retype-email'>
          <label htmlFor="retypeEmail">Re-type Email Address *</label>
          <input
            type="email"
            id="retypeEmail"
            value={retypeEmail}
            onChange={handleRetypeEmailChange}
          />
        </div>
        <div className='signup-password'>
          <label htmlFor="password">Password  *</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
        <div className='signup-retype-password'>
          <label htmlFor="RetypePassword">Retype Password  *</label>
          <input
            type="password"
            id="RetypePassword"
            value={retypePassword}
            onChange={handleRetypePasswordChange}
          />
        </div>
        <div className='signup-username'>
          <label htmlFor="username">Username *</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={handleUsernameChange}
          />
        </div>
        <div className='signup-first-name'>
          <label htmlFor="firstName">Legal First/Given Name *</label>
          <input
            type="text"
            id="firstName"
            value={firstName}
            onChange={handleFirstNameChange}
          />
        </div>
        <div  className='signup-last-name'>
          <label htmlFor="lastName">Last/Family/Surname *</label>
          <input
            type="text"
            id="lastName"
            value={lastName}
            onChange={handleLastNameChange}
          />
        </div>
        <div className='signup-phone'>
          <label htmlFor="phone">Phone *</label>
          <input
            type="text"
            id="phone"
            value={phone}
            onChange={handlePhoneChange}
          />
        </div>
        <div className='signup-date-of-birth'>
          <label htmlFor="dateOfBirth">Date of Birth *</label>
          <input
            type="date"
            id="dateOfBirth"
            value={dateOfBirth}
            onChange={handleDateOfBirthChange}
          />
        </div>
        <div className='signup-address'>
          <label htmlFor="address">Address line *</label>
          <input
            type="text"
            id="address"
            value={address}
            onChange={handleAddressChange}
          />
        </div>
          <button type="submit">
          <Link to="/profile.jsx">
            <a href="">Create Account</a>
          </Link> 
          </button>
        <div className="signup-signin">
          <p>already have an account?</p>
            <Link to="/login.jsx">
              <a href="">
                sign in
              </a>
            </Link>
        </div>
      </form>
      </div>
      </div>
    </div>
  );
};

export default Signup;