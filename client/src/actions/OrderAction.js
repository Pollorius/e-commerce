import axios from 'axios'

export const GET_ORDER = 'GET_ORDER'
export const ADD_ITEM_TO_ORDER = 'ADD_ITEM_TO_ORDER'
export const DELETE_ITEM_FROM_ORDER = 'DELETE_ITEM_FROM_ORDER'
// export const REMOVE_ITEM_FROM_ORDER = 'REMOVE_ITEM_FROM_ORDER';

export function getOrders () {
  return (dispatch, getState) => {
    axios.get('http://localhost:9000/orders/1')
      .then(response => {
        dispatch({
          type: GET_ORDER,
          payload: response.data
        })
      })
  }
}
export function addItemToOrder (userId, productId) {
  console.log(productId)
  return (dispatch, getState) => {
    axios.post(`http://localhost:9000/orders/${userId}/add`, productId)
      .then(response => {
        dispatch({
          type: ADD_ITEM_TO_ORDER,
          payload: response.data
        })
      })
  }
}

export function deleteItemFromOrder (id) {
  return (dispatch) => {
    axios.delete('http://localhost:9000/products/' + id)
      .then(response => {
        dispatch({
          type: DELETE_ITEM_FROM_ORDER,
          payload: response.data
        })
      })
  }
}
