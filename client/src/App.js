<<<<<<< HEAD
import React, {Component} from 'react';
//import logo from './logo.svg';
import './App.css';
//import Card from './components/Card.jsx';
=======
import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
>>>>>>> d4e2687467d99a58b9704301dc83acf7d153aa95
import Cards from './components/Cards.jsx';
//import SearchBar from './components/SearchBar.jsx';
import Nav from './components/Nav.jsx'
import Form from './components/Forms.jsx';
import  { BrowserRouter, Route } from 'react-router-dom';
import Home from './components/Home.jsx';
import ProductItem from './components/Product.jsx';
import FormAdd from './components/FormAdd.jsx';
import Categories from './components/categories.jsx'
import FormCat from './components/FormCat.jsx';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products:[],
      categories: []
    };
    this.onFilter = this.onFilter.bind(this);
    this.onSearch =this.onSearch.bind(this)
  } 
  callApi() {
      fetch("http://localhost:9000/products")
          .then(res => res.json())
          .then(res => this.setState({ products:res }))
          .catch(err => err)
          }

  callApiCategories() {
      fetch("http://localhost:9000/categories")
          .then(res => res.json())
          .then(res => this.setState({ categories:res }))
          .catch(err => err)
          }
 
  componentDidMount() {
      this.callApi();
      this.callApiCategories();
  }
  handleChange(event) {
    this.setState({products: event.target.products});
    this.setState({categories: event.target.categories});
  }
  onClose(id) {
     this.setState(products => products.filter(c => c.id !== id));
  }

  onSearch (products){
    fetch(`http://localhost:9000/products?search=${products}`)
    .then(res => res.json())
    .then((res) => {
      if(res.length > 0 ) {
         
        this.setState({products: res})
        
      } else {
        alert("PRODUCT NOT FOUND")
      }
      
    })
    .catch(err => err) 
  }

<<<<<<< HEAD
  
  onFilter(id) {
    let product = this.state.products.filter(c => c.id === parseInt(id));
    if(product.length > 0) {
        return product[0];
=======
  onFilter(id) {
    let product = this.state.products.filter(p => p.id === parseInt(id));
    if(product.length > 0) { 
      return product[0];
>>>>>>> d4e2687467d99a58b9704301dc83acf7d153aa95
    } else {
        return null;
    }
  }


  render() {
    const {products, categories} = this.state;
    
      return (
          <div className="App">
            <BrowserRouter>
            <Route
               path='/'
               render={() => <Nav onSearch={this.onSearch} />}
              />
            <div>
            <Route
               exact
               path='/'
               render={() => <Home />}
             />
              
            <Route 
               exact path='/products'
               render ={() => <Cards products={products} categories={categories}/>}
               />  
            <Route 
               exact path='/products'
               render ={() => <Categories categories={categories}/>}
               
              />
<<<<<<< HEAD
              
             
              
              <Route
               exact path='/products/:id/new'
               render ={()=> <FormAdd onChange={this.handleChange}  products={products} categories={categories} /> }
              />
              <Route
               exact path='/products/:id/edit'
               render ={()=> <Form onChange={this.handleChange} products={products}/> }
              />
              <Route
               exact path='/products/:id/addcat'
               render ={()=> <FormCat onChange={this.handleChange} categories={categories}/> }
=======
            <Route
               exact path='/products/:id/edit'
               render ={()=> <Form onChange={this.handleChange}/> }
>>>>>>> d4e2687467d99a58b9704301dc83acf7d153aa95
              />
              <Route 
                exact path='/products/:id'
                render ={({match}) => <ProductItem 
                product={this.onFilter(match.params.id)} />}
              />
            </div>
            <hr />   
         
            </BrowserRouter> 
         </div>
         
       
     );

  }
}

export default App;
