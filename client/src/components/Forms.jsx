import React from 'react';
import style from './Forms.module.css';
import { useForm } from 'react-hook-form';

export default function Form({ product, categories }) {
    const { register } = useForm();
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
            id: e.target.id.value,
            categoryId: e.target.categoryId.value
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
                        <label for="inputBrand">Brand</label>
                        <input name='brand' type="text" className="form-control" ref={register} id="inputBrand" required />
                    </div>
                    <div className="form-group col-md-6">
                        <label for="inputName">Name</label>
                        <input name='name' type="text" className="form-control" ref={register} id="inputName" required />
                    </div>
                </div>
                <div className="form-group">
                    <label for="inputDescription">Description</label>
                    <input name='description' type="text" className="form-control" ref={register} id="inputDescription" placeholder="Cerveza rubia de malta..." required />
                </div>


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
                    <input name='price' type="text" className="form-control" ref={register} id="inputPrice" required />
                </div>
                <div class="form-group">
                    <label for="exampleFormControlSelect2">Select category</label>
                    <select name='category' multiple className="form-control" id="exampleFormControlSelect2">
                        {categories.map(c => <option>
                            {c.name}
                        </option>)}
                    </select>
                </div>


                <div className="form-group">
                    <label for="exampleFormControlFile1">Upload your product image</label>
                    <input type="file" className="form-control-file" ref={register} id="exampleFormControlFile1" />
                </div>
                <input type="submit" />
            </form>
        </div>
    )
}
