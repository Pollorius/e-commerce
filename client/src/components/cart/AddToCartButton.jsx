import React from 'react';
import {addItemToOrder} from '../../actions/OrderAction.js';
import { useDispatch } from 'react-redux';

export default function AddtoCartButton (productId) {  
    const dispatch = useDispatch();
   
    function addItem(uId,pId){
        console.log(pId)
      dispatch(addItemToOrder(uId, pId))
        alert('Item successfully added to cart')
    }
    return ( 
    <div className='addItemToOrder'>
        <button className="btn btn-secondary btn-sm" onClick={() => addItem(1, productId.id)}>
            Add to Cart
        </button>
    </div>
    )
}
