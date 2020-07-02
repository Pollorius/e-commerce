import React from 'react';
import style from './Forms.module.css';
//import { useForm } from 'react-hook-form';

export default function FormCat({refreshPage}) {

    // const { register } = useForm();
    // const onSubmit = data => console.log(data);
    
  const handleSubmit = function(e) {
    e.preventDefault();
    var url = 'http://localhost:9000/categories';
    var data = {
      name: e.target.name.value,
      id: e.target.id.value
    };
    console.log(data)
    fetch(url, {
      method: 'POST', //POST
      body: JSON.stringify(data),
      headers:{
        'Content-Type': 'application/json'
      }
    }).then(res => console.log(res));
  }

  

    return (
        <div className={style.container}>
            <form onSubmit={handleSubmit} name="fetch">
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label for="inputName">Name</label>
                        <input name='name' type="text" className="form-control" id="inputName"  required />
                    </div>
                </div>
                <input onClick={refreshPage} type="submit" />
            </form>
        </div>
    )
}