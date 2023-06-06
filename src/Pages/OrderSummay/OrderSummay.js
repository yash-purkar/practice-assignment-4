import React from 'react'
import { UseOrder } from '../../Contexts/OrderContext'
import { NavLink } from 'react-router-dom';

export const OrderSummay = () => {
  const { orderState: { orderedItems, selectedAddress } } = UseOrder();
  const totalAmount = orderedItems?.reduce((acc, curr) => acc + curr.newPrice, 0);
  const payment_id = localStorage.getItem("practice_payment_id");
  return (

    <>
      {
        orderedItems.length > 0 ? <div>
          <div>
            <h3>Order Confirmed</h3>
            <strong>Payment ID : {payment_id}</strong><br />
            <strong>Total Amount : {totalAmount}</strong>
            <br />

            <div><h4>{selectedAddress.name}</h4>
              <p>{selectedAddress.city}</p>
              <p>{selectedAddress.phoneNumber}</p></div>
          </div>

          <div>
            {
              orderedItems?.map(prod => {
                return (
                  <div key={prod._id}>
                    <img src={prod.image} alt={prod.itemName} width="200" height="200" />
                    <br />
                    <span>{prod.itemName}</span><br />
                    <span>Qty: {prod.qty}</span>
                    <hr />
                  </div>
                )
              })
            }
          </div>
        </div>
          :
          <> <h2>You haven't ordered anything yet</h2>
            <NavLink to="/productlisting"><h4>Shop now</h4></NavLink></>
      }
    </>
  )
}

