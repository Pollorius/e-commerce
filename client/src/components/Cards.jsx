import React from 'react';
<<<<<<< HEAD
import Card from './Card.jsx'

export default function Cards({cervezas}) {
  return (
  <div className='cards'>
    {cervezas.map(c=> <Card
    name={c.name}
    brand={c.brand}
    package={c.package}
    description={c.description}
    prize ={c.prize}
    
    
    />)}
      
  </div>)
};
=======

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
>>>>>>> a0d09ef180d7faa9fc46d75c13281c6f2b9e1abb
