import React from 'react';

import Card from './Card.jsx';

export default function Cards({ cervezas }) {
    return (
        <div className='cards'>
            {cervezas.map(c => <Card
                name={c.name}
                brand={c.brand}
                package={c.package}
                description={c.description}
                prize={c.prize}
            />)}
        </div>
    );
}
