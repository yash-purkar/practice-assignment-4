import axios from "axios"
import { success, warn } from "./ToastServices";

export const addToWishlist = async (encodedToken, product, dispatch) => {
  console.log(product)
  try {
    const response = await axios.post("/api/user/wishlist", {
      product
    },
      {
        headers: {
          authorization: encodedToken
        }
      }
    )
    const { data } = response;
    if (response.status === 200 || response.status === 201) {
      dispatch({ type: "WISHLIST_OPERATIONS", payload: data.wishlist })
      success("Added To Wishlist")
    }
  } catch (error) {
    console.log(error)
  }

}

export const removeFromWishlist = async (id, encodedToken, dispatch) => {
  try {
    const response = await axios.delete(`/api/user/wishlist/${id}`, {

      headers: {
        authorization: encodedToken
      }

    })
    const { data } = response;
    dispatch({ type: "WISHLIST_OPERATIONS", payload: data.wishlist })
    // console.log(data)
    warn("Removed From Wishlist")
  } catch (error) {
    console.log(error)
  }
}