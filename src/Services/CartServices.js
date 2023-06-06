import axios from "axios"
import { success } from "./ToastServices";


export const addToCart = async (encodedToken, product, dispatch) => {
  try {
    const response = await axios.post('/api/user/cart', {
      product
    },
      {
        headers: {
          authorization: encodedToken
        }
      }
    )
    const { data } = response;
    // console.log(response)
    dispatch({ type: "CART_OPERATIONS", payload: data.cart })
    success("Added to cart")
  } catch (error) {
    console.log(error)
  }
}

export const removeFromCart = async (id, encodedToken, dispatch) => {
  try {
    const response = await axios.delete(`/api/user/cart/${id}`, {
      headers: {
        authorization: encodedToken
      }
    })

    const { data } = response;
    // console.log(data)
    if (response.status === 200 || response.status === 201) {
      dispatch({ type: "CART_OPERATIONS", payload: data.cart })

    }
  } catch (error) {
    console.log(error)
  }
}


export const quantityIncAndDec = () => {
  try {

  } catch (error) {

  }
}