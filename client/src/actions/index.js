import axios from 'axios';

const ADD_PRODUCT = 'ADD_PRODUCT';
const MODIFY_PRODUCT = 'MODIFY_PRODUCT';
const DELETE_PRODUCT = 'DELETE_PRODUCT';
const GET_PRODUCTS = 'GET_PRODUCTS';
const ADD_CATEGORY = 'ADD_CATEGORY';
const DELETE_CATEGORY = 'DELETE_CATEGORY';
const GET_PRODUCT_BY_CATEGORY = 'GET_PRODUCT_BY_CATEGORY';
const GET_CATEGORY = 'GET_CATEGORY';


export function addProduct(product) {
    return {
        type: ADD_PRODUCT,
        product
    }
};

export function modifyProduct(product) {
    return {
        type: MODIFY_PRODUCT,
        product
    };
};

export function deleteProduct() {
    return {
        type: DELETE_PRODUCT,
    }
}

export function getProduct(product) {
    return {
        type: GET_PRODUCTS,
        product
    }
}

export function addCategory(category) {
    return {
        type: ADD_CATEGORY,
        category
    }
}

export function deleteCategory(category) {
    return {
        type: DELETE_CATEGORY,
        category
    }
}

export function getProductByCategory(category) {
    return {
        type: GET_PRODUCT_BY_CATEGORY,
        category
    }
}

export function getCategory(category) {
    return {
        type: GET_CATEGORY,
        category
    }
}

//assync  action get products
export const fetchProducts = () => {
    return function (dispatch) {
        dispatch(fetchProductsRequest())
        axios.get('http://localhost:9000/products')
            .then(response => {
                const products = response.data.map(products => products.id)
                dispatch(fetchProductsSuccess(products))
            })
            .catch(error => {
                //error.message describe error
                dispatch(fetchUsersFailure(error.message))
            })
    }
}