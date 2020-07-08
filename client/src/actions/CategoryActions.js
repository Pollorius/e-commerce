import axios from 'axios'

export const ADD_CATEGORY = 'ADD_CATEGORY';
//export const MODIFY_PRODUCT = 'MODIFY_PRODUCT';
export const DELETE_CATEGORY = 'DELETE_CATEGORY';
export const GET_CATEGORIES = 'GET_CATEGORIES';
export const GET_CATEGORY_BY_ID = 'GET_CATEGORY_BY_ID';

export function getCategories() {
    return (dispatch, getState) =>{
      axios.get(`http://localhost:9000/categories`)
        .then(response => {
            dispatch({
                type: GET_CATEGORIES,
                payload: response.data
            })
        })
    }
    
}

export function addCategory() {
    return (dispatch, getState) =>{
      axios.get(`http://localhost:9000/categories`)
        .then(response => {
            dispatch({
                type: ADD_CATEGORY,
                payload: response.data
            })
        })
    }
    
}