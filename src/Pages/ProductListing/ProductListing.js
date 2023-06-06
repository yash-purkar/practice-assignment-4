import React, { useEffect } from 'react'
import { UseData } from '../../Contexts/DataContext'
import { SingleProduct } from '../../Components/SingleProduct/SingleProduct';
import './ProductListing.css'
import { Filters } from './Components/Filters/Filters';
export const ProductListing = () => {
  const { state: { products, filters: { priceRange, sizes, selectedRating, categories, searchValue } }, setLoading } = UseData();

  const transformData = () => {
    let filteredData = [...products];

    filteredData = filteredData?.filter(prod => prod.newPrice <= priceRange);

    if (sizes.length > 0) {
      filteredData = filteredData?.filter(prod => sizes.some(size => prod.size === size))
    }

    if (selectedRating) {
      filteredData = filteredData?.filter(prod => prod.rating >= selectedRating)
    }

    if (categories.length > 0) {
      filteredData = filteredData?.filter(prod => categories?.some(category => prod.category === category))
    }

    if (searchValue) {
      filteredData = filteredData?.filter(product => product.itemName.toLowerCase().includes(searchValue.toLowerCase()))
    }
    return filteredData;
  }

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 800)
  }, [])

  return (
    <div>
      <Filters />
      <hr />
      <div className='products-container'>
        {
          transformData()?.map(product => <SingleProduct key={product._id} product={product} />)
        }
      </div>
    </div>
  )
}
