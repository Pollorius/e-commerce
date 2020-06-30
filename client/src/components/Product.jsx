import React from 'react';
import Image from './beerProduct.jpg';
import style from './Product.module.css';
import { Link } from 'react-router-dom';

export default function ProductItem(props) {
    return (
        <div>
            <div className={style.productContainer}>
                <div>
                    <img src={Image} alt="..." />
                    <div>
                        <h5 className="card-title"> {props.product.name} </h5>
                        <p className="card-text"> {props.product.brand} </p>
                        <p className="card-text">
                            <small className="text-muted">
                                {props.product.description}
                            </small>
                        </p>
                    </div>
                </div>
            </div>
            <div className={style.container}>
                <div className={style.btn}>
                    <Link to={`/products/${props.product.id}/edit`} >
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