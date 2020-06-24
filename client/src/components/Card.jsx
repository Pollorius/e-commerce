import React from 'react';
import style from './Card.module.css';
import Imagen from './logo512.png'


export default function Card(props) {
    return (
        <div className={style.container}>
            <div className={style.ancho}>
                <div className="card mb-3 "  >
                    <div className="row no-gutters">
                        <div className="col-md-4">
                            <img src="..." className="card-img" alt="" height="200px" width="500px" />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title"> {props.nombre} </h5>
                                <p className="card-text">Descripción producto</p>
                                <p className="card-text"><small className="text-muted">Ver más..</small></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};
