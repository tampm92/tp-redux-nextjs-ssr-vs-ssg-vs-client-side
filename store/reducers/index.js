import { combineReducers } from 'redux'
import loading from './loading'
import product from './product'

const rootReducer = combineReducers({
  loading,
  product
})

export default rootReducer
