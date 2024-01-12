const cartReducer = (state, action) => {
    switch (action.type) {
      case "ADD_TO_CART":
        return {
          ...state,
          cart: [...state.cart, action.payload],
        };
      case "EMPTY_CART":
        return {
          ...state,
          cart: [],
        };
      // Otros casos del switch statement según tus necesidades
      default:
        return state;
    }
  };
  
  export default cartReducer;