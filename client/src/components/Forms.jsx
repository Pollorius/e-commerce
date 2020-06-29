import React from 'react';
import style from './Forms.module.css';

export function validate(input) {
    let errors = {};
    if (!input.name) {
      errors.name = 'Name is required';
    } 
    if(!input.brand){
      errors.brand = 'Brand is required';
    } 
    if (!input.package) {
        errors.package = 'Package is required';
    } 
    if(!input.price){
        errors.price = 'Price is required';
    } 
  
    return errors;
};

export default function Form(){
    const[input,setInput] = React.useState({
        name: '',
        brand: '',
        package: '',
        price: '',
      })
    const [errors, setErrors] = React.useState({});

    const handleInputChange = function(e) {
        setErrors(validate({
          ...input,
          [e.target.name]: e.target.value
        }));
        setInput({
            ...input,
            [e.target.name]: e.target.value
        });
    }


    return (
        <div className={style.container}>
            <form>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label for="inputBrand">Brand</label>
                        <input  type="text" className="form-control" id="inputBrand" onChange={handleInputChange}/>
                        {errors.brand && (
                            <p className={style.text}>{errors.brand}</p>
                        )}
                    </div>
                    <div className="form-group col-md-6">
                        <label for="inputName">Name</label>
                        <input type="text" className="form-control" id="inputName" onChange={handleInputChange} />
                        {errors.name && (
                            <p className={style.text}>{errors.name}</p>
                        )}
                    </div>
                </div>
                <div className="form-group">
                    <label for="inputDescription">Description</label>
                    <input type="text" className="form-control" id="inputDescription" placeholder="Cerveza rubia de malta..." />
                </div>
                <div className="form-row">
                     <div className="form-group col-md-6">
                        <label for="inputPresentacion">Presentación</label>
                        <input type="text" className="form-control" id="inputPresentacion"/>
                    </div> 
                    <div className="form-group col-md-4">
                        <label for="inputPackage">Package</label>
                        <select id="inputPackage" className="form-control">
                            <option selected>Choose...</option>
                            <option>473cc</option>
                            <option>710cc</option>
                            <option>745cc</option>
                            <option>750cc</option>
                            <option>1000cc</option>
                        </select>
                        {errors.package && (
                            <p className={style.text}>{errors.package}</p>
                        )}
                    </div>
                    <div className="form-group col-md-2">
                        <label for="inputPrice">Price</label>
                        <input type="text" className="form-control" id="inputPrice" onChange={handleInputChange}  />
                        {errors.price && (
                            <p className={style.text}>{errors.price}</p>
                        )}
                    </div>
                </div>
                    <div className="form-group">
                        <label for="exampleFormControlFile1">Upload your product image</label>
                        <input type="file" className="form-control-file" id="exampleFormControlFile1"/>
                    </div>
                <button type="submit" className="btn btn-primary">Submit Product</button>
            </form>
        </div>
    )
}