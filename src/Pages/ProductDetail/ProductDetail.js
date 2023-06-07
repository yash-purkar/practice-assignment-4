import React from 'react'
import { useParams } from 'react-router-dom'
import { UseData } from '../../Contexts/DataContext';

export const ProductDetail = () => {
  const { productId } = useParams();

  const { state: { products } } = UseData();

  const product = products.find(prod => prod._id === productId);
  const { itemName, image, description } = product

  return (
    <div>
      <h2>{itemName}</h2>
      <img src={image} alt={itemName} />
      <p>{description}</p>
    </div>
  )
}
