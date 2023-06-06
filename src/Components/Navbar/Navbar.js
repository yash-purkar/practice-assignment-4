import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import './Navbar.css'
import { UseData } from '../../Contexts/DataContext'
export const Navbar = () => {
  const navigate = useNavigate()
  const { dispatch, state: { filters: { searchValue } } } = UseData()
  const handleSearchProduct = (e) => {
    navigate("/productlisting")
    dispatch({ type: "SEARCH_PRODUCT", payload: e.target.value });
  }
  return (
    <nav className='navigation'>
      <NavLink to="/" className="nav-item">QuickDeal</NavLink>
      <input type="search" name="" id="" placeholder='search-an-item' onChange={handleSearchProduct} value={searchValue} />
      <NavLink to="/productlisting" className="nav-item">Explore</NavLink>
      <NavLink to="/wishlist" className="nav-item">Wishlist</NavLink>
      <NavLink to="/cart" className="nav-item">Cart</NavLink>
      <NavLink to="/profile" className="nav-item">Profile</NavLink>
    </nav>
  )
}
