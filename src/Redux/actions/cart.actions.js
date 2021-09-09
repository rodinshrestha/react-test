export const addToCart = (item) => (dispatch) => {
  const data = {
    ...item,
    quantity: 1,
    _id: Math.floor(Math.random() * Date.now()),
  };
  dispatch({
    type: "ADD_TO_CART",
    payload: data,
  });
};

export const removeFromCart = (id) => (dispatch) => {
  dispatch({
    type: "REMOVE_FROM_CART",
    payload: id,
  });
};

export const reset = () => (dispatch) => {
  dispatch({
    type: "RESET",
  });
};

export const increaseQty = (id) => (dispatch) => {
  dispatch({
    type: "INCREASE_QTY",
    payload: id,
  });
};

export const decreaseQty = (id) => (dispatch) => {
  dispatch({
    type: "DECREASE_QTY",
    payload: id,
  });
};
