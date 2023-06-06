import React, { useState } from 'react'
import { UseData } from '../../Contexts/DataContext'
import { UseOrder } from '../../Contexts/OrderContext';
import { UseAddress } from '../../Contexts/AddressContext';
import { warn } from '../../Services/ToastServices';
import { useNavigate } from 'react-router-dom';
import { removeFromCart } from '../../Services/CartServices';

export const Checkout = () => {
  const { state: { cart }, dispatch } = UseData();
  const { orderState: { orderPriceDetails }, orderDispatch } = UseOrder();
  const { addressState: { addresses } } = UseAddress();
  const [selectedAddress, setSelectedAddress] = useState(addresses[0]);
  const navigate = useNavigate();
  const encodedToken = localStorage.getItem("practiceToken")
  const [isOrderPlaced, setIsOrderPlaced] = useState(false)
  const cartItemsIds = cart?.reduce((acc, curr) => [...acc, curr._id], [])

  const handlePlaceOrder = () => {
    if (addresses?.length > 0) {
      var options = {
        key: "rzp_test_eIfzqLCuOyYMmK",
        key_secret: "key_secret",
        amount: orderPriceDetails.totalAmount * 100,
        currency: "INR",
        name: "QuickDeal",
        description: "For testing purpose",

        handler: function (response) {
          localStorage.setItem("practice_payment_id", response.razorpay_payment_id);

          orderDispatch({ type: "ORDERED_ITEMS", payload: cart })
          orderDispatch({ type: "SELECTED_ADDRESS", payload: selectedAddress })
          cartItemsIds?.forEach(id => removeFromCart(id, encodedToken, dispatch))
          setIsOrderPlaced(true)
          setTimeout(() => {
            setIsOrderPlaced(false);
            navigate("/orderSummary")
          }, 2000)
        },

        prefill: {
          name: "Yash Purkar",
          email: "yashpurkar7079@gmail.com",
          contact: "9370387079"
        },
        notes: {
          address: "Razorpay Corporate office"
        },
        theme: {
          color: "#2874f0"
        }

      }
      var pay = new window.Razorpay(options);
      pay.open();
    }

    else {
      warn("Add the Address First");
      setTimeout(() => {
        navigate("/profile")
      }, 2000)
    }
  }


  return (
    <>
      {
        isOrderPlaced ? <h1>Order Will be delievered in 3 days....</h1> : <div className='flex justify-around'>
          <div style={{ width: "30%", border: "1px solid red" }}>
            {
              addresses.length > 0 && <> {
                addresses?.map(addr => {
                  return (
                    <div className='addr.id'>
                      <input type="radio" onChange={() => setSelectedAddress(addr)} checked={addr.id === selectedAddress.id} />
                      {addr.name} , {addr.city} <br /> Phone: {addr.phoneNumber}
                      <hr />
                    </div>
                  )
                })
              }</>
            }
            {addresses.length === 0 && <h1>Add an address first</h1>}
          </div>
          <div style={{ border: "1px solid red", width: "20%", padding: "1rem" }}>
            <h3>Order Details</h3>
            <div className='flex justify-between'> <strong>Item</strong>  <strong>Qty</strong></div>
            <div>
              {
                cart?.map((prod) => {
                  return (
                    <div key={prod._id} className='flex justify-between'>
                      <span>
                        {prod.itemName}
                      </span>
                      <span>
                        {prod.qty}
                      </span>
                    </div>
                  )
                })
              }
            </div>
            <hr />
            <div>
              <h3>Price Details</h3>
              <p className='flex justify-between'><span>Price ({cart?.length})</span> <span>RS. {orderPriceDetails.price}</span></p>
              <p className='flex justify-between'><span>Discount: </span> <span>Rs.-{orderPriceDetails.discount}</span></p>
              <p className="flex justify-between"><span>Delievery Charges: </span><span>FREE</span></p>
              <p className="flex justify-between">
                <h4>
                  Total Amount:
                </h4>
                <h4>{orderPriceDetails.totalAmount}</h4>
              </p>
            </div>
            <hr />
            <div>
              <h3>Deliver To</h3>
              {
                addresses.length > 0 && <div><h4>{selectedAddress.name}</h4>
                  <p>{selectedAddress.city}</p>
                  <p>{selectedAddress.phoneNumber}</p></div>
              }
            </div>
            <button onClick={handlePlaceOrder}>Place Order</button>
          </div>
        </div>
      }
    </>
  )
}
