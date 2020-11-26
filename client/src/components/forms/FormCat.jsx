import React from 'react';
import style from './Forms.module.css';
//import { useForm } from 'react-hook-form';
import {useDispatch, useSelector} from 'react-redux';
import {addCategory} from '../../actions/CategoryActions.js';
import {useState} from 'react';

export default function FormCat(match) {

    const dispatch = useDispatch();
  
    const [input, setInput] = useState({
        name: "",
    })
  
    const handleInputChange = function(e) {
        setInput({
            ...input,
            [e.target.name]: e.target.value,
                   
        })
    }

    const handleSubmit = function (e) {
        e.preventDefault()
        dispatch(() => dispatch(addCategory(input)));
    }

    return (
        <div className={style.container}>
            <form onChange={handleInputChange}>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label for="inputName">Name</label>
                        <input name='name' type="text" className="form-control" id="inputName"  required />
                    </div>
                </div>
                <input type="submit" onClick={handleSubmit} />
            </form>
        </div>
    )
}