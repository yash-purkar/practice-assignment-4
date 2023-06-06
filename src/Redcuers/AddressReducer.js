export const addressInitialState = {
  addresses: [{
    id: new Date().getTime().toString(),
    name: "Yash Purkar",
    city: "Bangalore",
    phoneNumber: 5566985475
  }],

  addressInfo: {
    name: "",
    city: "",
    phoneNumber: ""
  }


}

export const addressReducer = (state, action) => {
  const { payload } = action;
  switch (action.type) {
    case "ADD_NEW_ADDRESS": return {
      ...state, addresses: [...state.addresses, payload]
    }

    case "REMOVE_ADDRESS": return {
      ...state, addresses: state.addresses.filter(({ id }) => id !== payload)
    }

    case "SET_ADDR_TO_EDIT": return {
      ...state, addressInfo: payload
    }

    case "EDIT_ADDRESS": return {
      ...state, addresses: state.addresses.map((addr) => addr.id === payload.id ? payload : addr)
    }

    case "CLEAR_ADDRESS_INFO": return {
      ...state, addressInfo: { name: "", city: "", phoneNumber: "" }
    }
    default: return state;
  }
}