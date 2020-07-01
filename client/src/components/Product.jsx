import React from 'react';
import Image from './beerProduct.jpg';
import style from './Product.module.css';
import { Link } from 'react-router-dom';


export default function ProductItem({product}) {
    console.log(product)
    return (
        <div>
            <div className={style.productContainer}>
                <div>
                    <img src={Image} alt={Image} />
                    <div>
                        <h5 className="card-title"> {product.name} </h5>
                        <p className="card-text"> {product.brand} </p>
                        <p className="card-text">
                            <small className="text-muted">
                                {product.description}
                            </small>
                        </p>
                        <ul className="card-text">
                        {product.categories.map(c =>
                            <li>
                                {c.name}
                            </li>)} 
                        </ul>
                    </div>
                </div>
            </div>
            <div className={style.container}>
                <div className={style.btn}>
                    <Link to={`/products/${product.id}/edit`} >
                        <button type="button"
                            className="btn btn-secondary btn-sm">
                            Edit
                    </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}