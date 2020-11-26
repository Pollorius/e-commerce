import React from 'react';
//import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getOrders } from '../../actions/OrderAction';


export default function Order(match) {
    const dispatch = useDispatch();
    const orders = useSelector(store => store.orders);
      
    useEffect(() => dispatch(getOrders(match.match.params.id)),[])
    let items = orders.orders        
    console.log(items)
    
    function showList(items) {
        if(Array.isArray(items) && items.length !== 0){
            console.log(items)
            let it = items
            return it.map(i =>
                <tr>
                    <th scope="row">1</th>
                    <td> {i.brand} </td>
                    <td> {i.name} </td>
                    <td> {i.package}</td>
                    <td>{i.price} </td>
                </tr>
            )
        }
    }
    
    return (
        <div className="d-flex ">
    
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th scope="col">Quantity</th>
                        <th scope="col">Brand</th>
                        <th scope="col">Name</th>
                        <th scope="col">Package</th>
                        <th scope="col">Total</th>
                    </tr>
                </thead>
                <tbody>
                    {showList(items)}
                </tbody>
            </table>
    
        </div >
    
    );
}

