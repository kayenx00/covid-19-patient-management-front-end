import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import '../LoginView/Login.css';
function Register(params) {
    const navigate = new useNavigate()
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")
    const [confirmedPassword, setConfirmedPassword] = useState("")
  //   const handleClick = async () => {
  //     const DateOfLastLogin = new Date();
  //     localStorage.setItem('token', "blaa")
  //     localStorage.setItem('DateOfLastLogin', DateOfLastLogin);
  //     params.setIsLoggedin(true)
  //     navigate('/');
  // }
    const  onSubmit = async (e) => {
      e.preventDefault()
      const axios = require('axios');
      if(password === confirmedPassword) {
        const data = JSON.stringify({
          "username": username,
          "email" : email,
          "password": password
        });
        const config = {
          method: 'post',
          url: 'http://localhost:8080/api/patientSignup',
          headers: { 
            'Content-Type': 'application/json', 
          },
          data : data
        };
    
        await axios(config)
        .then(function (response) {
        const DateOfLastLogin = new Date();
        alert('Register successfully ! Go to your email to activate your account')
        })
        .catch(function (error) {
        console.log(error);
      });
      }
      else {
        alert("The two password you enter are not the same")
        window.location.reload()
      }
  } 
    return ( 
          <div>
              {/* <button onClick={() => handleClick()}>
                  Login
              </button> */}
            <div className="login-container">
            <div className="login-content">
              <h2 className="login-title">Register</h2>
              <form onSubmit={(e) => onSubmit(e)}>
                <div className="form-item">
                  <input
                    type="text"
                    className="form-control "
                    placeholder="Enter User Name"
                    name="username"
                    value={username}
                    onChange={e => setUsername(e.target.value)}
                  />
                </div>
                <div className="form-item">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Enter Email"
                    name="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                  />
                </div>
                <div className="form-item">
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Enter Password"
                    name="password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                  />
                </div>
                <div className="form-item">
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Enter Password Again"
                    name="confirmedPassword"
                    value={confirmedPassword}
                    onChange={e => setConfirmedPassword(e.target.value)}
                  />
                </div>
                <div className="form-item">
                  <span>              
                    <button className="btn btn-primary btn-block">Register</button>
                  </span>
                </div>
              </form>
              <span className="signup-link">Already Register? <Link to="/">Login</Link></span>
            </div>
          </div>
          </div>
       );
}

export default Register;