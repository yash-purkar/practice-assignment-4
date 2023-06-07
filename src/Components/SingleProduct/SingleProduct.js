import React from 'react'
import './SingleProduct.css'

import { AiOutlineStar } from 'react-icons/ai'
import { addToWishlist, removeFromWishlist } from '../../Services/WishlistServices';
import { UseData } from '../../Contexts/DataContext';
import { addToCart } from '../../Services/CartServices';
import { NavLink, useNavigate } from 'react-router-dom';
export const SingleProduct = ({ product }) => {
  const { _id, image, itemName, size, rating, newPrice, oldPrice, discount } = product;

  const encodedToken = localStorage.getItem("practiceToken");

  const { dispatch, state: { wishlist, cart } } = UseData();
  const navigate = useNavigate();

  const handleAddToCArt = () => {
    if (encodedToken) {
      addToCart(encodedToken, product, dispatch)
    }
    else {
      navigate("/login")
    }
  }

  const handleProductClick = (id) => {
    navigate(`/product/${id}`)
  }

  return (
    <div key={product._id} className="product-card">

      <img src={image} alt={itemName} className='product-image' onClick={() => handleProductClick(_id)} />
      <div className='flex justify-between'>
        <p>{itemName}</p>
        <p>Size : <strong>{size}</strong></p>
        <p><strong>{rating}</strong><AiOutlineStar /></p>
      </div>
      <div className='flex justify-between'>
        <p>Rs.<span><strong>{newPrice}</strong> </span><span style={{ textDecoration: "line-through" }}> Rs.{oldPrice}</span>
        </p>
        <p>{discount}%OFF</p>

      </div>
      {
        wishlist.some(prod => prod._id === _id)
          ?
          <button onClick={() => removeFromWishlist(_id, encodedToken, dispatch)}>Remove From Wishlist</button>
          :
          <button onClick={() => addToWishlist(encodedToken, product, dispatch)}>Add To Wishlist</button>
      }

      {
        cart?.some(prod => prod.id === _id) ? <NavLink to="/cart"><button>Go To Cart</button></NavLink> : <button onClick={handleAddToCArt}>Add To Cart</button>
      }

    </div>
  )
}
