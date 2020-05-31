const ADD_ITEM = "ADD_ITEM";
const LOGIN_USER = "LOGIN_USER";

const initialState = {
  buyer: null,
  basket: [],
};

export const addItemToBasket = (item) => {
  return {
    type: ADD_ITEM,
    payload: item,
  };
};

export const loginBuyer = (buyer) => {
  return {
    type: LOGIN_USER,
    payload: buyer,
  };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM:
      item = action.payload.item;
      return {
        ...basket,
        item,
      };
    case LOGIN_USER:
      buyer = action.payload.buyer;
      return {
        ...state,
        buyer,
      };
    default:
      return { ...state };
  }
};

export default reducer;
