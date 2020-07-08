import React from 'react';
import style from './Forms.module.css';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { addProduct } from '../actions/ProductAction.js';
import { useEffect } from 'react';
import { getCategories } from '../actions/CategoryActions.js';


export default function Form(match) {

    const dispatch = useDispatch();
    const products = useSelector(store => store.products)
    const categories = useSelector(store => store.categories)
    console.log(products)


    useEffect(() => dispatch(addProduct()), []);
    useEffect(() => dispatch(getCategories()), []);

    function submitForm(e) {
        e.preventDefault();
        this.props.dispatch({
            type: "SUBMIT_FORM"
        });
    };

    // const dispatch = useDispatch();
    // const products = useSelector(store => store.products)
    const categories = useSelector(store => store.categories)
    // console.log(products)
    

    //     useEffect(() => dispatch(addProduct()),[]);
    //     useEffect(() => dispatch(getCategories()),[]);
        
    //     function submitForm (e){
    //         e.preventDefault();
    //         this.props.dispatch({
    //           type: "SUBMIT_FORM"
    //         });
    //       };

    return (
        <div className={style.container}>
            <form>
                {/* <form onSubmit={handleSubmit} name="fetch"> */}
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label for="inputBrand">Brand</label>
                        <input name='brand' type="text" className="form-control" id="inputBrand" required />
                    </div>
                    <div className="form-group col-md-6">
                        <label for="inputName">Name</label>
                        <input name='name' type="text" className="form-control" id="inputName" required />
                    </div>
                </div>
                <div className="form-group">
                    <label for="inputDescription">Description</label>
                    <input name='description' type="text" className="form-control" id="inputDescription" placeholder="Cerveza rubia de malta..." required />
                </div>
                <div className="form-row">

                    <div className="form-group col-md-4">
                        <label for="inputPackage">Package</label>
                        <select name='package' id="inputPackage" className="form-control" required>
                            <option selected>Choose...</option>
                            <option>473cc</option>
                            <option>710cc</option>
                            <option>745cc</option>
                            <option>750cc</option>
                            <option>1000cc</option>
                        </select>
                    </div>
                    <div className="form-group col-md-2">
                        <label for="inputPrice">Price</label>
                        <input name='price' type="text" className="form-control" id="inputPrice" required />
                    </div>
                </div>
                <div className="form-group">
                    <label for="exampleFormControlFile1">Upload your product image</label>
                    <input type="file" className="form-control-file" id="exampleFormControlFile1" />
                </div>

                <div class="form-group">
                    <label for="exampleFormControlSelect2">Select category</label>
                    <select name='categoryId' multiple className="form-control" id="inputCategoryId">
                        {categories.categories.map(c => <option>
                            {c.name}
                        </option>)}
                    </select>


                </div>
                <input onSubmit={submitForm} type="submit" />
            </form>
        </div>
    )
}