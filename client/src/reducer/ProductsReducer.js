import {
    GET_PRODUCTS,
    GET_PRODUCT_BY_ID, 
    DELETE_PRODUCT, 
    ADD_PRODUCT, 
    MODIFY_PRODUCT,
    DELETE_ITEM_FROM_ORDER, 
    ADD_ITEM_TO_ORDER,
    GET_PRODUCT_BY_CATEGORY
} from '../actions/ProductAction'

const inicialState = {
    products:[],
};

export default function productReducer ( state= inicialState, action){
    switch (action.type) {
        case GET_PRODUCTS:
            return {
                ...state,
                products: action.payload
            };
        case GET_PRODUCT_BY_ID:
            return {
                ...state,
                products: action.payload
            };
        case DELETE_PRODUCT:
            return {
                ...state,
                products: action.payload
            };
        case ADD_PRODUCT:
            return {
                ...state,
                products: action.payload
            };
        case MODIFY_PRODUCT:
            return {
                ...state,
                products: action.payload
            };
        case ADD_ITEM_TO_ORDER:
            return {
                ...state,
                products: action.payload
            };
        case DELETE_ITEM_FROM_ORDER:
            return {
                ...state,
                products: action.payload
            };
        case REMOVE_ITEM_FROM_ORDER:
            return {
                ...state,
                products: action.payload
            };
        case GET_PRODUCT_BY_CATEGORY:
            return {
                ...state,
                products: action.payload
            }
        default:
            return state;
    }
    
}