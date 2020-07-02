import React from 'react';
import Card from './Card.jsx';
import { Link } from 'react-router-dom';
//import style from './Cards.module.css';

export default function Cards({ products }) {
    console.log({products})
    return (
        <div>
            <div className='cards'>
                {products.map(p => <Card
                    key={p.id}
                    id={p.id}
                    name={p.name}
                    brand={p.brand}
                    package={p.packaging}
                    description={p.description}
                    price={p.price}
                    categories={p.categories}


                />)}

            </div>
            <div >
                <div >
                    <Link to={`/products/${products.id}/new`}>
                        <button type="button" className="btn btn-secondary btn-sm">Agregar Producto</button>
                    </Link>
                </div>
            </div>


        </div>

    );
}
