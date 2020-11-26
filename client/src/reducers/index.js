import { combineReducers } from 'redux'
import productsReducer from './ProductsReducer.js'
import categoryReducer from './CategoryReducer.js'
import userReducer from './UserReducer.js'
import ordersReducer from './OrdersReducer.js'

export default combineReducers({
  products: productsReducer,
  categories: categoryReducer,
  users: userReducer,
  orders: ordersReducer
})
