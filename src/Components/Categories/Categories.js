import React from 'react'
import './Categories.css'
import { UseData } from '../../Contexts/DataContext'
import { useNavigate } from 'react-router-dom';

export const Categories = () => {
  const { state: { categories }, dispatch } = UseData();
  const navigate = useNavigate();
  const handleCategory = (category) => {
    navigate("/productlisting")
    dispatch({ type: "FILTER_BY_CATEGORIES", payload: category })
  }
  return (
    <>
      <h1 className='categories-heading'>Categories</h1>
      <div className='categories-container'>
        {
          categories?.map(category => <div key={category._id} onClick={() => handleCategory(category.categoryName)} className='single-category'><h1>{category.categoryName}</h1>
            <p>{category.description}</p></div>)
        }
      </div>
    </>
  )
}
