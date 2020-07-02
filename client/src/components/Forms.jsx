import React from 'react';
import style from './Forms.module.css';
// import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom'

export default function Form({ product, onClick, categories }) {
    
    // const { register } = useForm();
    // const onSubmit = data => console.log(data);

    const handleSubmit = function (e) {
        e.preventDefault();
        var url = `http://localhost:9000/products/${product.id}`;
        var data = {
            brand: e.target.brand.value,
            name: e.target.name.value,
            package: e.target.package.value,
            description: e.target.description.value,
            price: e.target.price.value,
            id: e.target.id.value
        };
        fetch(url, {
            method: 'PUT', //POST
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => res.json())
            .catch(err => err)
    }
       
    return (
        <div className={style.container}>
            <form onSubmit={handleSubmit} name="fetch">
                <div className="form-row">
                    <div className="form-group col-md-6">
                    <label htmlFor="inputBrand">Brand</label>
                        <input name='brand' type="text" className="form-control" id="inputBrand" defaultValue={product.brand} required />
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="inputName">Name</label>
                        <input name='name' type="text" className="form-control" id="inputName" defaultValue={product.name} required />
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="inputDescription">Description</label>
                    <input name='description' type="text" className="form-control" id="inputDescription" defaultValue={product.description} required />
                </div>


                <div className="form-group col-md-4">
                    <label htmlFor="inputPackage">Package</label>
                    <select name='package' id="inputPackage" className="form-control" required>
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
                    <input name='price' type="text" className="form-control" id="inputPrice" defaultValue={product.price} required />
                </div>
                <div class="form-group">
                    <label for="exampleFormControlSelect2">Select category</label>
                    <select name='categoryId' multiple className="form-control" id="inputCategoryId">
                        {categories.map(c =><option>
                        {c.name}
                        </option>)}
                    </select>

                    
                </div>

                <div className="form-group">
                    <label htmlFor="exampleFormControlFile1">Upload your product image</label>
                    <input type="file" className="form-control-file" id="exampleFormControlFile1" />
                </div>
                <div class="form-group">
                    <label for="exampleFormControlSelect2">Select category</label>
                    <select name='categoryId' multiple className="form-control" id="inputCategoryId">
                        {categories.map(c =><option>
                        {c.name}
                        </option>)}
                    </select>
                </div>
                <Link to={`/products/${product.id}`}>
                <input type="submit" onClick={onClick}/>
                </Link>
            </form>
        </div>
    )
}
