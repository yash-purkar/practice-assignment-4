export const dataInitialState = {
  categories: [],
  products: [],
  filters: {
    priceRange: 2000,
    sizes: [],
    selectedRating: null,
    categories: [],
    searchValue: ""
  },
  wishlist: [],
  cart: []
}

export const dataReducer = (state, action) => {
  const { payload } = action;
  switch (action.type) {
    case "INITIALIZE_CATEGORIES": return {
      ...state, categories: payload
    }

    case "INITIALIZE_PRODUCTS": return {
      ...state, products: payload
    }

    case "FILTER_BY_PRICE": return {
      ...state, filters: { ...state.filters, priceRange: payload }
    }

    case "FILTER_BY_SIZES": return {
      ...state, filters: { ...state.filters, sizes: state.filters.sizes.includes(payload) ? state.filters.sizes?.filter(size => size !== payload) : [...state.filters.sizes, payload] }
    }

    case "FILTER_BY_RATINGS": return {
      ...state, filters: { ...state.filters, selectedRating: payload }
    }

    case "FILTER_BY_CATEGORIES": return {
      ...state, filters: { ...state.filters, categories: state.filters.categories.includes(payload) ? state.filters.categories.filter(category => category !== payload) : [...state.filters.categories, payload] }
    }

    case "CLEAR_ALL_FILTERS": return {
      ...state, filters: { ...dataInitialState.filters }
    }

    case "WISHLIST_OPERATIONS": return {
      ...state, wishlist: payload
    }

    case "CART_OPERATIONS": return {
      ...state, cart: payload
    }

    case "SEARCH_PRODUCT": return {
      ...state, filters: { ...state.filters, searchValue: payload }
    }
    default: return state;
  }
}