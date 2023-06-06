import React from 'react';
import './Filters.css'
import { UseData } from '../../../../Contexts/DataContext';

export const Filters = () => {
  const { state: { filters: { priceRange, selectedRating, sizes, categories } }, dispatch } = UseData()
  return (
    <div className='flex justify-around'>
      <h2>Filters</h2>
      <label htmlFor="">
        Price Range:
        <input type="range" name="" id="" min="500" max="2000" step="500" onChange={(e) => dispatch({ type: "FILTER_BY_PRICE", payload: e.target.value })} value={priceRange} />
        <span>less than <strong>{priceRange}</strong></span>
      </label>
      <br />
      <br />
      <div>
        <h2>Sizes</h2>
        {
          ["S", "M", "L", "XL", "XXL"].map(size => <label htmlFor="" key={size}>
            <input type="checkbox" onChange={(e) => dispatch({ type: "FILTER_BY_SIZES", payload: e.target.value })} value={size}
              checked={sizes.includes(size)}
            />
            {size}
            <br />
          </label>)
        }
      </div>



      <div>
        <h2>Ratings</h2>
        {
          [1, 2, 3, 4].map(rating => <label key={rating}>
            <input type="radio" name="rating" value={rating} id="" onChange={(e) => dispatch({ type: "FILTER_BY_RATINGS", payload: Number(e.target.value) })} checked={Number(selectedRating) === rating} />
            <span>{rating} star and above</span>
            <br />
          </label>)
        }
      </div>

      <div>
        <h2>Categories</h2>
        {
          ["Men", "Women", "Kids"].map(category => <label key={category}>
            <input type="checkbox" onChange={(e) => dispatch({ type: "FILTER_BY_CATEGORIES", payload: category })} value={category} id="" checked={categories.includes(category)} />
            {category}</label>)
        }
      </div>

      <button onClick={() => dispatch({ type: "CLEAR_ALL_FILTERS" })} style={{ alignSelf: "center" }}>Clear All Filters</button>
    </div>
  )
}
