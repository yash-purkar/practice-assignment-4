import axios from "axios"
import { success, warn } from "./ToastServices";

export const loginUser = async (email, password, prevLocation, navigate, setIsLoggedIn) => {
  try {
    const { status, data: { encodedToken, foundUser } } = await axios.post('/api/auth/login', {
      email, password
    })

    if (status === 200 || status === 201) {
      localStorage.setItem("practiceToken", encodedToken)
      localStorage.setItem("practiceUser", JSON.stringify(foundUser));


      setIsLoggedIn(true);
      if (prevLocation) {
        navigate(prevLocation)
      }
      else {
        navigate("/productlisting")
      }
      success("Loggin Succesfully")
    }
  } catch (error) {
    warn("No Data Found, SignUp Now")
  }
}
// *****************
export const loginAsGuest = async (creds, prevLocation, navigate, setIsLoggedIn) => {

  try {
    const { status, data: { encodedToken, foundUser } } = await axios.post("/api/auth/login", {
      ...creds
    })

    if (status === 200 || status === 201) {
      localStorage.setItem("practiceToken", encodedToken);
      localStorage.setItem("practiceUser", JSON.stringify(foundUser))
      console.log(encodedToken)
      setIsLoggedIn(true)
      if (prevLocation) {
        navigate(prevLocation)
      }
      else {
        navigate("/productlisting")
      }

      success("Loggin Succesfully")
    }
  } catch (error) {
    console.log(error)
  }
}

// ************
export const signUpUser = async (data, navigate, setIsLoggedIn) => {
  try {
    const { status, data: { encodedToken, createdUser
    } } = await axios.post('/api/auth/signup', {
      ...data
    })
    if (status === 200 || status === 201) {
      localStorage.setItem("practiceToken", encodedToken)
      localStorage.setItem("practiceUser", JSON.stringify(createdUser
      ))

      setIsLoggedIn(true)
      navigate("/productlisting")
      success("SignUp Successfully")
    }

  } catch (error) {
    warn("Mail Already Exist try with another")
  }
}