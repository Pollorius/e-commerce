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
                            <img src={Imagen} className="card-img" alt="" height="200px" width="500px" />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title"> {props.name} </h5>
                                <p className="card-text"> {props.brand}</p>
                                <p className="card-text"> {props.package} </p>
                                <p className="card-text"> {props.description} </p>
                                <p className="card-text"> {props.prize} </p>
                                <p className="card-text"><small className="text-muted"> <a href="#">Ver más...</a></small></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};
