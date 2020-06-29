import React from 'react';
//import Card from './Card.jsx';
import {Link} from 'react-router-dom';
import style from './Cards.module.css'
import Cat from './Cat.jsx'
export default function Categories({categories}) {
    console.log({categories})
    return (
        <div>
         <div >
         <div className='cards'>
            {categories.map(c => <Cat
                key={c.id}
                id={c.id}
                name={c.name}
                
            />)}
        </div>
            
         </div>
         <div className={style.container}>
         <div >
             <Link to={`/products/${categories.id}/addcat`}>
                 <button type="button" Name="btn btn-secondary btn-sm">Agregar Categoria</button>
             </Link>
         </div>
        </div>
      </div>
       
        
        
    );
}
