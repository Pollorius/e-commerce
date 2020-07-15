import React, { useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux';
// import style from './Forms.module.css';
//import { useForm } from 'react-hook-form';
import Card from './Card.jsx';
import { getProductByCategory } from '../actions/ProductAction.js';


export default function CatCards(match) {
    const dispatch = useDispatch();
    const products = useSelector(store => store.products);
        
    useEffect(() => dispatch(getProductByCategory(match.match.params.id)),[])
    
    let catalogue = products.products
    
    function showProducts(products){
        if(products !== undefined) {
            return products.map(p => <Card
                key={p.id}
                id={p.id}
                name={p.name}
                brand={p.brand}
                package={p.packaging}
                description={p.description}
                price={p.price}
                categories={p.categories}
            />)
        }
    }
    return (
        <div className='cards row m-5'>
            <div className='cards'>
                {showProducts(catalogue)}
            </div>

            </div>
    )
}


