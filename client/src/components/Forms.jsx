import React from 'react';
import style from './Forms.module.css';
// import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {modifyProduct, getProductById} from '../actions/ProductAction.js';
import {useEffect} from 'react';


export default function Form(match) {

    const dispatch = useDispatch();
    const products = useSelector(store => store.products)
    console.log(products)
    

        useEffect(() => dispatch(getProductById(match.params.id)),[]);
        
        let categories = products.products.categories;

        function showCategories (categories){
            if (categories !== undefined){
                return categories.map(c => 
                    <li>
                        {c.name}
                    </li>)
            }
        }
       
    return (
        <div className={style.container}>
            <form> 
            {/* <form onSubmit={handleSubmit} name="fetch"> */}
                <div className="form-row">
                    <div className="form-group col-md-6">
                    <label htmlFor="inputBrand">Brand</label>
                        <input name='brand' type="text" className="form-control" id="inputBrand" defaultValue={products.products.brand} required />
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="inputName">Name</label>
                        <input name='name' type="text" className="form-control" id="inputName" defaultValue={products.products.name} required />
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="inputDescription">Description</label>
                    <input name='description' type="text" className="form-control" id="inputDescription" defaultValue={products.products.description} required />
                </div>


                <div className="form-group col-md-4">
                    <label htmlFor="inputPackage">Package</label>
                    <select name='package' id="inputPackage"  className="form-control" required>
                        <option defaultValue>Choose...</option>
                        <option>473cc</option>
                        <option>710cc</option>
                        <option>745cc</option>
                        <option>750cc</option>
                        <option>1000cc</option>
                    </select>
                </div>
                <div className="form-group col-md-2">
                    <label htmlFor="inputPrice">Price</label>
                    <input name='price' type="text" className="form-control" id="inputPrice" defaultValue={products.products.price} required />
                </div>
                
                <div className="form-group">
                    <label htmlFor="exampleFormControlFile1">Upload your product image</label>
                    <input name="image" type="file" className="form-control-file" id="exampleFormControlFile1" />
                </div>
                <div className="form-group">
                    <label for="exampleFormControlSelect2">Select category</label>
                    <select name='categoryId' multiple className="form-control" id="inputCategoryId">
                        {showCategories(categories)}
                    </select>
                </div>
                <Link to={`/products/${products.id}`}>
                <input type="submit"/>
                </Link>
            </form>
        </div>
    )
}