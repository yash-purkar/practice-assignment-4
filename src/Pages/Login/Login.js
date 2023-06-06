import React, { useState } from 'react'
import { loginAsGuest, loginUser } from '../../Services/AuthServices';
import { UseAuth } from '../../Contexts/AuthContext';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { warn } from '../../Services/ToastServices';

export const Login = () => {
  const [loginDetails, setLoginDetails] = useState({
    email: "",
    password: ""
  });

  const { setIsLoggedIn } = UseAuth();


  const { email, password } = loginDetails;

  const location = useLocation();
  const navigate = useNavigate();


  const prevLocation = location?.state?.from?.pathname;

  const handleLogin = () => {
    if (email && password) {
      loginUser(email, password, prevLocation, navigate, setIsLoggedIn)
    }
    else {
      warn("Fill the details first")
    }
  }

  const handleGuestLogin = () => {
    const creds = {
      email: "adarshbalika@gmail.com",
      password: "adarshbalika"
    }

    setLoginDetails({ ...creds })
    loginAsGuest(creds, prevLocation, navigate, setIsLoggedIn)
  }

  return (
    <form action="" onSubmit={(e) => e.preventDefault()}>
      <input type="text" value={email} onChange={(e) => setLoginDetails({ ...loginDetails, email: e.target.value })} /> <br />
      <input type="password" value={password} onChange={(e) => setLoginDetails({ ...loginDetails, password: e.target.value })} /><br />
      <button onClick={handleLogin}>login</button>
      <button onClick={handleGuestLogin}>Login as Guest</button>
      <br />
      <NavLink to="/signup">Don't have an account? signUp</NavLink>
    </form>
  )
}
