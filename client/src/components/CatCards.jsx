import React from 'react';
// import style from './Forms.module.css';
//import { useForm } from 'react-hook-form';
import Card from './Card.jsx'

export default function CatCards({products}) {
    // const { register } = useForm();
    // const onSubmit = data => console.log(data);
    console.log({products})
    
    // callApiPCat() {
    //     fetch("http://localhost:9000/products/findByCat")
    //       .then(res => res.json())
    //       .then(res => this.setState({ categories: res }))
    //       .catch(err => err)
    // }

    return (
        <div className='cards'>
            <div className='cards'>
                {products.map(p => <Card 
                    
                    key={p.id}
                    id={p.id}
                    name={p.name}
                    brand={p.brand}
                    package={p.packaging}
                    description={p.description}
                    price={p.price}
                    categories={p.categories}


                />)}

            </div>

            </div>
    )
}


