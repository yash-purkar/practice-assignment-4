import React, { useState } from 'react'
import { signUpUser } from '../../Services/AuthServices';
import { UseAuth } from '../../Contexts/AuthContext';
import { NavLink, useNavigate } from 'react-router-dom';
import { warn } from '../../Services/ToastServices';

export const SignUp = () => {
  const [signUpDetails, setSignUpDetails] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: ""
  });

  const { setIsLoggedIn } = UseAuth();
  const navigate = useNavigate();
  const { firstName, lastName, email, password } = signUpDetails;

  const handleChange = (e) => {
    const { name, value } = e.target
    setSignUpDetails(prev => ({ ...prev, [name]: value }))
  }

  const handleCreateAccount = () => {
    if (firstName, lastName, email, password) {
      signUpUser(signUpDetails, navigate, setIsLoggedIn)
    }
    else {
      warn("Fill the details first")
    }
  }

  return (
    <div>
      <label htmlFor="">FirstName: <input type="text" name='firstName' value={firstName} onChange={handleChange} /> </label> <br /><br />

      <label htmlFor="">LastName: <input type="text" name='lastName' value={lastName} onChange={handleChange} /> </label> <br /><br />

      <label htmlFor="">Email: <input type="text" value={email} name='email' onChange={handleChange} /> </label> <br /><br />

      <label htmlFor="">Password: <input type="password" name='password' value={password} onChange={handleChange} /> </label> <br /><br />
      <button onClick={handleCreateAccount}>Create New Account</button>
      <br />
      <NavLink to="/login">Already have an account? LogIn</NavLink>
    </div>
  )
}
