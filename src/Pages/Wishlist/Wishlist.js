import React from 'react'
import { UseData } from '../../Contexts/DataContext'
import { SingleProduct } from '../../Components/SingleProduct/SingleProduct';

export const Wishlist = () => {
  const { state: { wishlist } } = UseData();
  return (
    <>
      <h2>My Wishlist: ({wishlist.length})</h2>
      <div className='products-container' style={{ width: "100%" }}>
        {
          wishlist?.map(product => <SingleProduct key={product._id} product={product} />)
        }
      </div>
    </>
  )
}
