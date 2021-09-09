const initialState = {
  product: [],
};

export default (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case "ADD_TO_CART":
      return {
        ...state,
        product: [...state.product, payload],
      };
    case "REMOVE_FROM_CART":
      const removeItem = state.product.filter((item) => item._id !== payload);
      return {
        ...state,
        product: removeItem,
      };

    case "INCREASE_QTY":
      const increaseQty = state.product.map((item) => {
        return item._id === payload
          ? { ...item, quantity: (item.quantity = item.quantity + 1) }
          : item;
      });
      return {
        ...state,
        product: increaseQty,
      };

    case "DECREASE_QTY":
      const decreaseQty = state.product.map((item) => {
        return item._id === payload
          ? { ...item, quantity: (item.quantity = item.quantity - 1) }
          : item;
      });
      return {
        ...state,
        product: decreaseQty,
      };

    case "RESET":
      return {
        ...state,
        product: [],
      };
    default:
      return state;
  }
};
