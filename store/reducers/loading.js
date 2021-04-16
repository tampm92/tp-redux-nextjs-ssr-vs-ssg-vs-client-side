import * as types from '@/store/action-types';

const initialState = {
  isLoading: false
};

const LoadingReducer = (state = initialState, action) => {
  switch(action.type) {
    case types.SET_LOADING: {
      return { ...state, isLoading: action.isLoading };
    }
    default:
      return state;
  }
};

export default LoadingReducer