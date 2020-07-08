import {ADD_USER} from '../actions/UserActions.js';

const inicialState ={
    user: [],
}

export default function userReducer(state=inicialState, action){
    if (action.type === ADD_USER){
        return {
            ...state,
            user: action.payload
        }
    }
    return state;
}