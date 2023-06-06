import React, { useState } from 'react'
import { UseAddress } from '../../../../Contexts/AddressContext'
import { AddressForm } from '../AddressForm/AddressForm';
import { warn } from '../../../../Services/ToastServices';

export const Address = () => {
  const { addressState: { addresses }, addressDispatch } = UseAddress();
  const [showForm, setShowForm] = useState(false);
  const [selectedEditId, setSelectedEditId] = useState(null);

  const handleRemoveAddress = (id) => {
    addressDispatch({ type: "REMOVE_ADDRESS", payload: id })
    warn("Address Removed")
  }

  const handleEditAddress = (id) => {
    setShowForm(true);
    setSelectedEditId(id)
    const foundAddress = addresses?.find(addr => addr.id === id);
    addressDispatch({ type: "SET_ADDR_TO_EDIT", payload: foundAddress })

  }
  return (
    <>
      <br />
      <button onClick={() => setShowForm(true)}>Add new Address</button>

      <div className='flex justify-around direction-column'>
        <div>
          {
            addresses?.map(addr => {
              const { id, name, city, phoneNumber } = addr;
              return (
                <div key={id}>
                  <h3>{name}</h3>
                  <div>
                    {city}<br /> Mobile: {phoneNumber}
                  </div>
                  <button onClick={() => handleEditAddress(id)}>edit</button>
                  <button onClick={() => handleRemoveAddress(id)}>remove</button>
                  <hr />
                </div>
              )
            })
          }
        </div>

        {
          showForm && <AddressForm setShowForm={setShowForm} selectedEditId={selectedEditId} setSelectedEditId={setSelectedEditId}
          />
        }
      </div>
    </>
  )
}
