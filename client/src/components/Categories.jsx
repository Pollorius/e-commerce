import React from 'react';
//import Card from './Card.jsx';
import { Link } from 'react-router-dom';
//import style from './Cards.module.css'
import Cat from './Cat.jsx';
import {useDispatch, useSelector} from 'react-redux';
import {getCategories} from '../actions/CategoryActions.js';
import {useEffect} from 'react';
import store from '../store.js'


export default function Categories() {
    console.log(store.getState())
    const dispatch = useDispatch();
    const categories = useSelector(store => store.categories)
   
    
    useEffect(() => dispatch(getCategories()),[]);

       

    return (
        <div>
            <div >
                <div className='cards'>
                    {categories.categories.map(c => <Cat
                        key={c.id}
                        id={c.id}
                        name={c.name}

                    />)}
                </div>

            </div>
            <div >
                <div > 
                    <Link to={`/products/addcat`}>
                        <button type="button" className="btn btn-secondary btn-sm">Agregar Categoria</button>
                    </Link>
                </div>
            </div>
        </div>



    );
}
