import * as types from '@/store/action-types';

const initialState = {
  list: [],
  cart: [],
  detail: {}
};

const productReducer = (state = initialState, action) => {
  switch(action.type) {
    case types.SET_PRODUCT_LIST: {
      return { ...state, list: action.payload };
    }
    case types.SET_PRODUCT_DETAIL: {
      return { ...state, detail: action.payload };
    }
    case types.SET_PRODUCT_CART: {
      return { ...state, cart: action.payload };
    }
    default:
      return state;
  }
};

export default productReducer