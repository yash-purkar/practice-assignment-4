import React, { useState } from 'react'
import { UseAddress } from '../../../../Contexts/AddressContext'
import { success, warn } from '../../../../Services/ToastServices';

export const AddressForm = ({ setShowForm, selectedEditId, setSelectedEditId }) => {

  const { addressState: { addressInfo }, addressDispatch } = UseAddress();

  const [addressDetails, setAddressDetails] = useState(addressInfo)

  const { name, city, phoneNumber } = addressDetails;

  const handleCancel = () => {
    setShowForm(false)
    setSelectedEditId(null)
    setAddressDetails({ name: "", city: "", phoneNumber: "" })
  }

  const handleSaveAdress = () => {

    if (name && city && phoneNumber) {
      console.log(selectedEditId)
      if (selectedEditId) {
        addressDispatch({ type: "EDIT_ADDRESS", payload: addressDetails })
        // console.log(addressInfo)
        addressDispatch({ type: "CLEAR_ADDRESS_INFO" })
        setSelectedEditId(null)
      }
      else {
        addressDispatch({ type: "ADD_NEW_ADDRESS", payload: { ...addressDetails, id: new Date().getTime().toString() } })
        success("Address Added")

      }
      setShowForm(false)
    }
    else {
      warn("Fill the data")
    }
    setAddressDetails({ name: "", city: "", phoneNumber: "" })
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAddressDetails(prev => ({ ...prev, [name]: value }))
  }

  const handleDummyData = () => {
    setAddressDetails({ name: "Yash", city: "Pune", phoneNumber: 1254684 })
  }

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <div>
        <input type="text" placeholder='Enter name' name="name" onChange={handleChange} value={name} />
        <br />
        <input type="text" placeholder='Enter city' name='city' onChange={handleChange} value={city} />
        <br />
        <input type="text" placeholder='Enter Mobile Number' name='phoneNumber' onChange={handleChange} value={phoneNumber} />
        <br />
        <button onClick={handleSaveAdress}>Save</button>
        <button onClick={handleCancel}>Cancel</button>
        <button onClick={handleDummyData}>Dummy Data</button>
      </div>
    </form>
  )
}
