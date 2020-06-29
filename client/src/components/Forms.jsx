import React from 'react';
import style from './Forms.module.css';
<<<<<<< HEAD
import { useForm } from 'react-hook-form';

export default function Form(props) {

    const { register } = useForm();
    const onSubmit = data => console.log(data);

  const handleSubmit = function(e) {
    e.preventDefault();
    var url = 'http://localhost:9000/products';
    var data = {brand: e.target.brand.value,
      name: e.target.name.value,
      package: e.target.package.value,
      description: e.target.description.value,
      price: e.target.price.value
    };
    fetch(url, {
      method: 'POST', //POST
      body: JSON.stringify(data),
      headers:{
        'Content-Type': 'application/json'
      }
    }).then(res => console.log(res));
  }
=======

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

>>>>>>> fe7f195793b502a4a808c47f9c5eb898f46bf16e

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
<<<<<<< HEAD

                        <input name='presentación' type="text" className="form-control" id="inputPresentacion"  required />
                    </div>

                        <input type="text" className="form-control" id="inputPresentacion"/>
                    </div>

=======
                        <input type="text" className="form-control" id="inputPresentacion"/>
                    </div> */}
>>>>>>> fe7f195793b502a4a808c47f9c5eb898f46bf16e
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
<<<<<<< HEAD
                
                <div className="form-group">
                    <label for="exampleFormControlFile1">Upload your product image</label>
                    <input type="file" className="form-control-file" id="exampleFormControlFile1" />
                </div>
                <input type="submit" />
=======
                </div>
                    <div className="form-group">
                        <label for="exampleFormControlFile1">Upload your product image</label>
                        <input type="file" className="form-control-file" id="exampleFormControlFile1"/>
                    </div>
                <button type="submit" className="btn btn-primary">Submit Product</button>
>>>>>>> fe7f195793b502a4a808c47f9c5eb898f46bf16e
            </form>
        </div>
    )
}