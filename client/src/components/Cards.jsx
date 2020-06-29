import React from 'react';
import Card from './Card.jsx';

export default function Cards({ products }) {   
    return (
        <div className='cards'>
            {products.map(p => <Card
                key={p.id}
                id={p.id}
                name={p.name}
                brand={p.brand}
                package={p.package}
                description={p.description}
                price={p.price}
                imageUrl={p.imageUrl}
            />)}
        </div>
    );
}
