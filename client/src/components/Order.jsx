import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getProductById} from '../actions/ProductAction.js';
import {getCategories} from '../actions/CategoryActions.js';
import {useEffect} from 'react';

function order() {

    // const dispatch = useDispatch();
    // const products = useSelector(store => store.products)
    // //const categories = useSelector(store => store.categories)
    // console.log(products)
    
    // // const categories = UseSelector(store => store.categories)

    //     useEffect(() => dispatch(getProductById(match.params.id)),[]);
    //     //useEffect(() => dispatch(getCategories(match.params.id)),[]);

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
                    <tr>
                        <th scope="row">1</th>
                        <td>Patagonia</td>
                        <td>Weisse</td>
                        <td>750</td>
                        <td>200</td>
                    </tr>
                    
                </tbody>
            </table>
        </div >
        
    );
};

export default order;