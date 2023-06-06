import { createContext, useContext, useReducer, useState } from "react";
import { orderInitialState, orderReducer } from "../Redcuers/OrderReducer";

const OrderContext = createContext();

export const OrderContextProvider = ({ children }) => {
  const [orderState, orderDispatch] = useReducer(orderReducer, orderInitialState)
  const [coupon, setCoupon] = useState({ name: "", value: null });

  return (
    <OrderContext.Provider value={{ coupon, setCoupon, orderState, orderDispatch }}>{children}</OrderContext.Provider>
  )
}

export const UseOrder = () => useContext(OrderContext)
