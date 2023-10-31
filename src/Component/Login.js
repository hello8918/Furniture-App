import React from 'react';

const Login = () => {
  const handleLogin = (event) => {
    event.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    alert(`Welcome, ${username}!`);
  };

  return (
    <div className="mainl">
      <div className="login-containerl">
        <div className="login-forml">
          <div className="head2-1">
            <p className="lefthl">
              <span style={{ color: 'grey' }}>THE</span>
              <span style={{ color: 'rgb(6, 94, 182)', fontFamily: 'Montserrat' }}>SPACIOUS</span>
            </p>
            <p className="headlinel">Transform your living spaces into dreamscapes with our exquisite furniture collections</p>
          </div>
          <h1 className="l">Login</h1>
          <form onSubmit={handleLogin} id="login-form">
            <div className="form-groupl">
              <label htmlFor="username">Username</label>
              <input type="text" id="username" name="username" placeholder="Enter your username" required />
            </div>
            <div className="form-groupl">
              <label htmlFor="password">Password</label>
              <input type="password" id="password" name="password" placeholder="Enter your password" required />
            </div>
            <button type="submit" className="submitl">Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
