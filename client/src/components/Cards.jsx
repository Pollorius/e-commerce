import React from 'react';
import Card from './Card.jsx';
import { Link } from 'react-router-dom';
//import style from './Cards.module.css';
import {useDispatch, useSelector} from 'react-redux';
import {getProducts} from '../actions/ProductAction.js';
import {useEffect} from 'react';

export default function Cards() {
    
    const dispatch = useDispatch();
    const products = useSelector(store => store.products)
    
    
    // const categories = UseSelector(store => store.categories)

        useEffect(() => dispatch(getProducts()),[]);

    return (
        <div>
            <div className='cards'>
                {products.products.map(p => <Card
                    key={p.id}
                    id={p.id}
                    name={p.name}
                    brand={p.brand}
                    package={p.packaging}
                    description={p.description}
                    price={p.price}
                    categories={p.categories}
                />)}

            </div>
            <div >
                <div >
                    <Link to={`/products/addProduct`}>
                        <button type="button" className="btn btn-secondary btn-sm">Agregar Producto</button>
                    </Link>
                </div>
                
            </div>


        </div>

    );
}
