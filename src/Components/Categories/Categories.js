import React from 'react'
import './Categories.css'
import { UseData } from '../../Contexts/DataContext'

export const Categories = () => {
  const { state: { categories }, dispatch } = UseData();

  const handleCategory = (category) => {
    dispatch({ type: "", payload: category })
  }
  return (
    <>
      <h1 className='categories-heading'>Categories</h1>
      <div className='categories-container'>
        {
          categories?.map(category => <div key={category._id} onClick={() => handleCategory(category)} className='single-category'><h1>{category.categoryName}</h1>
            <p>{category.description}</p></div>)
        }
      </div>
    </>
  )
}
