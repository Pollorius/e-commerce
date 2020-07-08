import React from 'react';
//import { useForm } from 'react-hook-form';
import {useDispatch} from 'react-redux';
import {addUser} from '../actions/UserActions.js';
import {useState} from 'react';

export default function Admin() {

    const dispatch = useDispatch();
    
    
    const [state, setState] = useState({
        userName: '',
        name: '',
        lastName: '',
        email: '',
        password: '',
        age: '',
        dni: '',
        address: ''
    });
    const handleInputChange = function(e) {
        setState({
            ...state,
            [e.target.name]: e.target.value,
                       
        })
    }

    return (
        
    )
}