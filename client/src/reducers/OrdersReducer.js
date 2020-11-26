import { ADD_ITEM_TO_ORDER, DELETE_ITEM_FROM_ORDER, GET_ORDER } from '../actions/OrderAction'

const initialState = {
  orders: []
}

export default function ordersReducer (state = initialState, action) {
  if (action.type === GET_ORDER) {
    return {
      ...state,
      orders: action.payload

    }
  }
  if (action.type === ADD_ITEM_TO_ORDER) {
    return {
      ...state,
      orders: action.payload

    }
  }
  if (action.type === DELETE_ITEM_FROM_ORDER) {
    return {
      ...state,
      orders: action.payload

    }
  }
  return state
}
