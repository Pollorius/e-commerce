import React from 'react'
import Card from './Card.jsx';
import { Link } from 'react-router-dom';
import style from './Cards.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getProducts } from '../../actions/ProductAction.js';

export default function Cards() {
    const dispatch = useDispatch();
    const products = useSelector(store => store.products);
        
    useEffect(() => dispatch(getProducts()),[])
    
    let catalogue = products.products
    
    function showProducts(products){
        console.log(products)
        if(products.length !== 0) {
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
        <div>
            <div className='cards row m-5'>
                {showProducts(catalogue)}
            </div>
            <div className={style.container}>
                <div >
                    <Link to={`/products/${catalogue.id}/addProduct`}>
                        <button type="button" className="btn btn-secondary btn-sm">Agregar Producto</button>
                    </Link>
                </div>
            </div>
        </div>
    );
}