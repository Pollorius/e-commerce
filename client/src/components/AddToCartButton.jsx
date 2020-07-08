import React from 'react';
import {addItemToOrder} from '../actions/ProductAction.js';

export default function AddtoCartButton ({id, name}) {  
    function AddItem(){
        addItemToOrder(id) 
        if (name === 'Add to cart') {
        alert('Item successfully added to cart')}
    }
    return ( 
    <div className='addItemToOrder'>
        <button onClick={AddItem}>
             {name}
        </button>
    </div>
    )
}
