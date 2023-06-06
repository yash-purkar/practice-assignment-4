export const orderInitialState = {
  orderPriceDetails: {
    price: null,
    discount: null,
    couponDiscount: null,
    totalAmount: null,
  },
  orderedItems: [],
  selectedAddress: {}
}


export const orderReducer = (state, action) => {
  const { payload } = action
  switch (action.type) {
    case "SET_PRICE_DETAILS": return {
      ...state, orderPriceDetails: payload
    }

    case "ORDERED_ITEMS": return {
      ...state, orderedItems: payload
    }

    case "SELECTED_ADDRESS": return {
      ...state, selectedAddress: payload
    }
    default: return state
  }
}