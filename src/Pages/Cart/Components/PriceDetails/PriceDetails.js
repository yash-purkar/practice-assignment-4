import React, { useState } from 'react'
import { UseData } from '../../../../Contexts/DataContext'
import { Coupon } from './Coupon/Coupon';
import { UseOrder } from '../../../../Contexts/OrderContext';
import { useNavigate } from 'react-router-dom';

export const PriceDetails = () => {
  const { state: { cart } } = UseData();
  const [showCouponBox, setShowCouponBox] = useState(false)
  const navigate = useNavigate()

  const price = cart?.reduce((acc, curr) => acc + curr.oldPrice * curr.qty, 0)

  const newPrice = cart?.reduce((acc, curr) => acc + curr.newPrice * curr.qty, 0)

  const { coupon, setCoupon, orderDispatch } = UseOrder();

  const couponDiscount = (newPrice * coupon.value) / 100

  const handleChekout = () => {
    const priceDetails = {
      price,
      discount: price - newPrice.toFixed(),
      couponDiscount,
      totalAmount: newPrice - couponDiscount
    }
    orderDispatch({ type: "SET_PRICE_DETAILS", payload: priceDetails });
    navigate("/checkout")
  }

  return (
    <div className='flex justify-around'>
      <div style={{ boxShadow: "0px 4px 8px rgba(0,0,0,0.3)", width: "300px", marginBottom: "5rem" }}>
        <h3>Price Details</h3>

        <p>Price ({cart?.length}) : Rs.{price.toFixed()}</p>

        <p>Discount : Rs.-{price - newPrice.toFixed()}</p>

        <p>Coupon Discount : Rs.-{couponDiscount.toFixed()}</p>

        {coupon.name && <div className='flex justify-between'>Coupon Name:{coupon.name}  <button onClick={() => setCoupon({ name: "", value: null })}>remove</button></div>}

        <p>Total Amount : Rs.{newPrice.toFixed()}</p>

        <div>Have A Coupon? <button onClick={() => setShowCouponBox(true)}>Apply</button></div>

        <p>You will save Rs. {price - newPrice - couponDiscount.toFixed()} on this order</p>

        <button onClick={handleChekout} style={{ marginBottom: "1rem" }}>Checkout</button>

      </div>

      {showCouponBox && <Coupon setShowCouponBox={setShowCouponBox} />}

    </div>
  )
}
