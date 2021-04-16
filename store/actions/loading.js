import * as types from '@/store/action-types';

export const setLoadingAction = (isLoading) => ({
  type: types.SET_LOADING,
  isLoading
});
