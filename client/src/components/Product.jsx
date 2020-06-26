import React from 'react';
import Image from './beerImage.jpg';
import style from './Product.module.css';


export default function ProductItem({products}) {
    return (
        <div className={style.productContainer}>
            <div>
                <img src={Image} alt="..." />
                <div>
                    <h5 className="card-title"> {products.name} </h5>
                    <p className="card-text"> {products.brand} </p>
                    <p className="card-text"><small className="text-muted"> {products.description}</small></p>
                </div>
            </div>
        </div>
    )
}
