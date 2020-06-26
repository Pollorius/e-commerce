import React from 'react';

import Card from './Card.jsx';

export default function Cards({ products }) {
    return (
        <div className='cards'>
            {products.map(c => <Card
                key={c.id}
                name={c.name}
                brand={c.brand}
                package={c.package}
                description={c.description}
                price={c.price}
            />)}
        </div>
    );
}
