import * as types from '@/store/action-types'
import ProductService from '@/shared/services/ProductService'
import { setLoadingAction } from '@/store/actions/loading'

const setProductList = (data) => ({
  type: types.SET_PRODUCT_LIST,
  payload: data
})

const setProductDetail = (data) => ({
  type: types.SET_PRODUCT_DETAIL,
  payload: data
})

const setProductCart = (data) => ({
  type: types.SET_PRODUCT_CART,
  payload: data
})

const getByPage = (page, pageSize = 10) => async (dispatch) => {
  dispatch(setLoadingAction(true))

  const res = await ProductService.getAll()
  if (res) {
    dispatch(setProductList(res))
  }
  
  dispatch(setLoadingAction(false))
}

const getDetail = (slug) => async (dispatch) => {
  dispatch(setLoadingAction(true))

  const res = await ProductService.getBySlug({slug})
  if (res) {
    dispatch(setProductDetail(res))
  }
  
  dispatch(setLoadingAction(false))
}

const getCart = () => async (dispatch) => {
  dispatch(setLoadingAction(true))

  const res = await ProductService.getCart()
  if (res) {
    dispatch(setProductCart(res))
  }
  
  dispatch(setLoadingAction(false))
}

export default {
  setProductList,
  setProductDetail,
  setProductCart,
  getByPage,
  getDetail,
  getCart
}
