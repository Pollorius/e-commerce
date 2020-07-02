import React from 'react';
//import Card from './Card.jsx';
import { Link } from 'react-router-dom';
//import style from './Cards.module.css'
import Cat from './Cat.jsx'
export default function Categories(props) {
    return (
        <div>
            <div >
                <div className='cards'>
                    {props.categories.map(c => <Cat
                        key={c.id}
                        id={c.id}
                        name={c.name}

                    />)}
                </div>

            </div>
            <div >
                <div > 
                    <Link to={`/products/${props.categories.id}/addcat`}>
                        <button type="button" className="btn btn-secondary btn-sm">Agregar Categoria</button>
                    </Link>
                </div>
            </div>
        </div>



    );
}
