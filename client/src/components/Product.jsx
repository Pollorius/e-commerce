import React from 'react';
import Image from './beerProduct.jpg';
import style from './Product.module.css';
import { Link } from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {getProductById} from '../actions/ProductAction.js';
import {getCategories} from '../actions/CategoryActions.js';
import {useEffect} from 'react';

export default function ProductItem(match) {

    const dispatch = useDispatch();
    const products = useSelector(store => store.products)
    //const categories = useSelector(store => store.categories)
    console.log(products)
    
    // const categories = UseSelector(store => store.categories)

        useEffect(() => dispatch(getProductById(match.params.id)),[]);
        //useEffect(() => dispatch(getCategories(match.params.id)),[]);

    //const {products } = product.products
    let categories = products.products.categories;

    function showCategories (categories){
        if (categories !== undefined){
            return categories.map(c => 
                <li>
                    {c.name}
                </li>)
        }
    }

    return (
        <div>
            <div className={style.productContainer}>
                <div>
                    <img src={Image} alt="..." />
                    <div>
                        <h5 className="card-title"> {products.products.name} </h5>
                        <p className="card-text"> {products.products.brand} </p>
                        <p className="card-text"> {products.products.packaging} </p>
                        <p className="card-text"> {products.products.price} </p>
                        <p className="card-text">
                            <small className="text-muted">
                                {products.products.description}
                            </small>
                        </p>
                        <ul>
                            {showCategories(categories)}
                        </ul> 
                    </div>
                </div>
            </div>
            <div className={style.container}>
                <div className={style.btn}>
                    <Link to={`/products/${products.products.id}/edit`} >
                        <button type="button"
                            className="btn btn-secondary btn-sm">
                            Edit
                        </button>
                    </Link>
                    <Link to={`/order/`} >
                        <button type="button"
                            className="btn btn-secondary btn-sm">
                            Agregar a la orden
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}