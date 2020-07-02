import React from 'react';
import style from './Card.module.css';
import Imagen from './beerProduct.jpg';
import { Link } from 'react-router-dom';



export default function Card({ name, brand, description, price, id, packaging , categories}) {
    return (
        <div className={style.container}>
            <div className={style.ancho}>
                <div className="card mb-3 "  >
                    <div className="row no-gutters">
                        <div className="col-md-4">
                            <img src={Imagen} className="card-img" alt="" height="200px" width="500px" />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title"> {name}</h5>
                                <p className="card-text"> {brand}</p>
                                <p className="card-text"> {packaging} </p>
                                <p className="card-text"> {description} </p>
                                <p className="card-text"> {price} </p>
                                <ul className="card-text">
                                {categories.map(c =>
                                    <li className="list-unstyled">
                                        {c.name}
                                    </li>)} 
                                </ul>
                                <Link to={`/products/${id}`} >
                                    <p className="card-text"><small className="text-muted">Ver más...</small></p>
                                </Link>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};
