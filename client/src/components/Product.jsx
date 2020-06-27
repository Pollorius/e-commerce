import React from 'react';
import Image from './beerImage.jpg';
import style from './Product.module.css';


export default function ProductItem(props) {
    return (
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
    )
}
