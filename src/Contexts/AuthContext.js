import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const token = localStorage.getItem("practiceToken")
  const [isLoggedIn, setIsLoggedIn] = useState(token ? true : false);

  // useEffect(() => {

  // }, [])
  return (
    <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>{children}</AuthContext.Provider>
  )
}

export const UseAuth = () => useContext(AuthContext)