import { createContext, useContext, useEffect, useReducer, useState } from "react";
import { dataInitialState, dataReducer } from "../Redcuers/DataReducer";
import axios from "axios";

const DataContext = createContext();

export const DataContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(dataReducer, dataInitialState);
  const [loading, setLoading] = useState(true);

  const getCategoriesData = async () => {
    try {
      const response = await axios.get('/api/categories');
      const { data: { categories } } = response;
      // console.log(categories)
      dispatch({ type: "INITIALIZE_CATEGORIES", payload: categories })
    } catch (error) {
      console.log(error)
    }
    finally {
      setLoading(false)
    }
  }

  const getProductsData = async () => {
    try {
      const response = await axios.get('/api/products');
      const { data: { products } } = response;
      dispatch({ type: "INITIALIZE_PRODUCTS", payload: products });
    } catch (error) {
      console.log(error)
    }
    finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    getCategoriesData();
    getProductsData();
  }, [])
  return (
    <DataContext.Provider value={{ state, dispatch, loading, setLoading }}>{children}</DataContext.Provider>
  )
}

export const UseData = () => useContext(DataContext)