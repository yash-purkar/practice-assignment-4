import React from 'react'
import { UseData } from '../../Contexts/DataContext'
import './Cart.css'
import { removeFromCart } from '../../Services/CartServices';
import { PriceDetails } from './Components/PriceDetails/PriceDetails';
import { warn } from '../../Services/ToastServices';

export const Cart = () => {
  const { state: { cart }, dispatch } = UseData();

  const encodedToken = localStorage.getItem("practiceToken");

  const handleRemoveFromCart = (_id, encodedToken, dispatch) => {
    removeFromCart(_id, encodedToken, dispatch)
    warn("Removed From Cart")
  }
  return (
    <div>
      <h2>My Cart ({cart?.length})</h2>
      <div className='flex'>
        {cart?.map(product => {
          const { _id, image, itemName, size, rating, newPrice, oldPrice, discount, qty } = product;
          return (
            <div key={_id} style={{ margin: "1rem" }}>
              <img src={image} alt={itemName} className='cart-img' />
              <div className='flex justify-between'><span>{itemName}</span>
                <div>
                  <button>-</button>
                  <span>qty : {qty}</span>
                  <button>+</button>
                </div>
              </div>
              <p className='flex justify-between'>
                <span>Rs.{newPrice} <span style={{ textDecoration: "line-through" }}> Rs.{oldPrice}</span></span>
                <span>{discount}%OFF</span>
              </p>

              <button onClick={() => handleRemoveFromCart(_id, encodedToken, dispatch)}>Remove From Cart</button>
            </div>
          )
        }

        )}
      </div>

      <br />
      {cart?.length > 0 && <PriceDetails />}
    </div>
  )
}
