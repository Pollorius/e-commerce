import { combineReducers } from "redux";
import productsReducer from './ProductsReducer.js';
import categoryReducer from './CategoryReducer.js';
import userReducer from "./UserReducer.js";

export default combineReducers({ 
    products: productsReducer, 
    categories: categoryReducer,
    user: userReducer,
});