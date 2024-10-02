import React from 'react';

const Login = () => {
  return (
    <section className="login">
      <h2>Login</h2>
      <form>
        <div className="input-holder">
          <div className="email">
            <label htmlFor="email">Email</label>
            <input 
              type="email" 
              id="email" 
              placeholder="Enter Your Email" 
              required 
            />
          </div>
        </div>
        <div className="input-holder">
          <div className="password">
            <label htmlFor="password">Password</label>
            <input 
              type="password" 
              id="password" 
              placeholder="Enter Your Password" 
              required 
            />
          </div>
        </div>
      </form>
    </section>
  );
};

export default Login;
