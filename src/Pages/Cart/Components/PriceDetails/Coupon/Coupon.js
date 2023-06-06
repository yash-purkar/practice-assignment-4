import React, { useState } from 'react'
import { UseOrder } from '../../../../../Contexts/OrderContext';

export const Coupon = ({ setShowCouponBox }) => {
  const { coupon, setCoupon } = UseOrder();

  const [selectedCouponDetails, setSelectedCouponDetails] = useState({
    name: "",
    value: coupon.value
  })

  const { name, value } = selectedCouponDetails;

  const handleApplyCoupon = () => {
    if (name) {
      setCoupon(selectedCouponDetails)
      setShowCouponBox(false)
    }
  }

  return (
    <div>
      <div className='flex align-center'>
        <h3>Apply Coupon</h3>
        <button onClick={() => setShowCouponBox(false)}>Cancel</button>
      </div>
      <label htmlFor="">
        <input type="radio" name="coupon" id="" onChange={() => setSelectedCouponDetails({ name: "DIWALI_DHAMAKA", value: 25 })} checked={value === 25} />
        : 25% OFF DIWALI_DHAMAKA
      </label>
      <br />
      <label htmlFor="">
        <input type="radio" name="coupon" id="" onChange={() => setSelectedCouponDetails({ ...selectedCouponDetails, name: "NEW_USER", value: 20 })} checked={value === 20} />
        : 20% OFF NEW_USER
      </label>
      <br />
      <button onClick={handleApplyCoupon}>Apply</button>
    </div>
  )
}
