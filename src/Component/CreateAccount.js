import React, { useState } from 'react';

const CreateAccount = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showResult, setShowResult] = useState(false);

  const handleCreateAccount = (e) => {
    e.preventDefault();

    // Your validation and account creation logic can go here
    // For simplicity, we'll just display a welcome message with the username.

    const result = `Welcome, ${username}!`;

    // Show the result
    setShowResult(true);
  };

  return (
    <div className='mainca'>
      <div className="form-containerca">
        <div className="head2-1">
          <p className="lefthca">
            <span style={{ color: 'grey' }}>THE</span>
            <span style={{ color: 'rgb(6, 94, 182)', fontFamily: 'Montserrat' }}>
              SPACIOUS
            </span>
          </p>
          <p className="headlineca">
            Transform your living spaces into dreamscapes with our exquisite furniture collections
          </p>
        </div>
        <h1 className="ca">Create an Account</h1>
        <form onSubmit={handleCreateAccount}>
          <div className="form-groupca">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              name="username"
              placeholder="Enter your username"
              required
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="form-groupca">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-groupca">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="form-groupca">
            <label htmlFor="confirm-password">Confirm Password</label>
            <input
              type="password"
              id="confirm-password"
              name="confirm-password"
              placeholder="Confirm your password"
              required
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
          <button type="submit" className="submitca">
            Create Account
          </button>
        </form>
      </div>
      {showResult && <p>Welcome, {username}!</p>}
    </div>
  );
};

export default CreateAccount;
