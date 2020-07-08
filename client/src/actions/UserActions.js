import axios from 'axios';

export const ADD_USER = 'ADD_USER';

export function addUser (data){
    return(dispatch,getState) => {
        axios.post(`http://localhost:9000/user/create`, data)
            .then(res =>{
                dispatch({
                    type: ADD_USER, 
                    payload: res.data
                })
            })
    }
}