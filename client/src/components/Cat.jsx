import React from 'react';
//import Card from './Card.jsx';
import { Link } from 'react-router-dom';
//import style from './Cards.module.css'

export default function Categories({ id, name }) {

    return (
        <div>
            <div >
                <div >
                    <Link to={`/products/${id}`}>
                        <button type="button" className="btn">{name}</button>
                    </Link>
                </div>

            </div>
        </div>



    );
}


