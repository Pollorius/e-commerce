import axios from 'axios'

export const ADD_PRODUCT = 'ADD_PRODUCT'
export const MODIFY_PRODUCT = 'MODIFY_PRODUCT'
export const DELETE_PRODUCT = 'DELETE_PRODUCT'
export const GET_PRODUCTS = 'GET_PRODUCTS'
export const SEARCH_PRODUCTS = 'SEARCH_PRODUCTS'
export const GET_PRODUCT_BY_ID = 'GET_PRODUCT_BY_ID'
export const GET_PRODUCT_BY_CATEGORY = 'GET_PRODUCT_BY_CATEGORY'

export function getProducts () {
  return (dispatch, getState) => {
    axios.get('http://localhost:9000/products')
      .then(response => {
        dispatch({
          type: GET_PRODUCTS,
          payload: response.data
        })
      })
  }
}

export function getProductById (id) {
  return (dispatch, getState) => {
    axios.get(`http://localhost:9000/products/${id}`)
      .then(response => {
        dispatch({
          type: GET_PRODUCT_BY_ID,
          payload: response.data
        })
      })
  }
}

export function searchProducts (data) {
  return (dispatch, getState) => {
    axios.get(`http://localhost:9000/products?search=${data}`)
      .then(response => {
        dispatch({
          type: SEARCH_PRODUCTS,
          payload: response.data
        })
      })
  }
}

export function modifyProduct (id, data) {
  return (dispatch, getState) => {
    axios.put(`http://localhost:9000/products/${id}`, data)
      .then(response => {
        dispatch({
          type: MODIFY_PRODUCT,
          payload: response.data
        })
      })
  }
}

export function addProduct (product) {
  return (dispatch, getState) => {
    axios.post('http://localhost:9000/products/', product)
      .then(response => {
        dispatch({
          type: ADD_PRODUCT,
          payload: response.data
        })
      })
  }
}

export function getProductByCategory (id) {
  return (dispatch, getState) => {
    axios.get(`http://localhost:9000/products/${id}/findByCat`)
      .then(response => {
        dispatch({
          type: GET_PRODUCT_BY_CATEGORY,
          payload: response.data
        })
      })
  }
}
