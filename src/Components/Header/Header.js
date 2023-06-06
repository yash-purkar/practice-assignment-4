import React from 'react'
import './Header.css'
import { NavLink } from 'react-router-dom'

export const Header = () => {
  return (
    <div>
      <div className='header'>
        <h1>Make your fashion more perfect</h1>
        <NavLink to="/productlisting"><button>Shop Now</button></NavLink>
      </div>
    </div>
  )
}
