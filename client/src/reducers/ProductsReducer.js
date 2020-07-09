import {GET_PRODUCTS, GET_PRODUCT_BY_ID, DELETE_PRODUCT, ADD_PRODUCT, MODIFY_PRODUCT, SEARCH_PRODUCTS } from '../actions/ProductAction.js';

const inicialState = {
    products:[],
};

export default function productReducer ( state= inicialState, action){
    if (action.type === GET_PRODUCTS ){
        return {
            ...state,
            products: action.payload

        }
    }
    if (action.type === SEARCH_PRODUCTS ){
        return {
            ...state,
            products: action.payload

        }
    }
    if (action.type === GET_PRODUCT_BY_ID ){
        return {
            ...state,
            products: action.payload

        }
    }
    if (action.type === MODIFY_PRODUCT ){
        return {
            ...state,
            products: action.payload

        }
    }
    if (action.type === ADD_PRODUCT ){
        return {
            ...state,
            products: action.payload

        }
    }
    return state;
}