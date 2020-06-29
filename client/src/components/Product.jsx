import React from 'react';
import Image from './beerProduct.jpg';
import style from './Product.module.css';
import {Link} from 'react-router-dom';


export default function ProductItem(props) {
    return (
        <div>
<<<<<<< HEAD
        <div className={style.productContainer}>
            <div>
                <img src={Image} alt="..." />
                <div>
                    <h5 className="card-title"> {props.products.name} </h5>
                    <p className="card-text"> {props.products.brand} </p>
                    <p className="card-text"><small className="text-muted"> {props.products.description}</small></p>
=======
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
>>>>>>> d4e2687467d99a58b9704301dc83acf7d153aa95
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
<<<<<<< HEAD
            <div className={style.container}>
                <div className={style.btn}>
                    <Link to={`/products/${props.products.id}/edit`}>
                        <button type="button" Name="btn btn-secondary btn-sm">Edit</button>
                    </Link>
                </div>
            </div>
           
        </div>
=======
    </div>
>>>>>>> d4e2687467d99a58b9704301dc83acf7d153aa95
    )
}
