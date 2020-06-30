import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import Cards from './components/Cards.jsx';
//import SearchBar from './components/SearchBar.jsx';
import Nav from './components/Nav.jsx'
import Form from './components/Forms.jsx';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './components/Home.jsx';
import ProductItem from './components/Product.jsx';
import FormAdd from './components/FormAdd.jsx';
import Categories from './components/Categories.jsx';
import FormCat from './components/FormCat.jsx'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { products: [], categories: [] };
    this.onFilter = this.onFilter.bind(this);
    this.onSearch = this.onSearch.bind(this)
  }
  callApi() {
    fetch("http://localhost:9000/products")
      .then(res => res.json())
      .then(res => this.setState({ products: res }))
      .catch(err => err)
  }
  callApiCategory() {
    fetch("http://localhost:9000/categories")
      .then(res => res.json())
      .then(res => this.setState({ categories: res }))
      .catch(err => err)
  }

  componentDidMount() {
    this.callApi();
    this.callApiCategory();
  }
  handleChange(event) {
    this.setState({ products: event.target.products });
  }
  onClose(id) {
    this.setState(products => products.filter(c => c.id !== id));
  }

  onSearch(products) {
    fetch(`http://localhost:9000/products?search=${products}`)
      .then(res => res.json())
      .then((res) => {
        if (res.length > 0) {

          this.setState({ products: res })

        } else {
          alert("PRODUCT NOT FOUND")
        }

      })
      .catch(err => err)
  }

  onFilter(id) {
    let product = this.state.products.filter(p => p.id === parseInt(id));
    if (product.length > 0) {
      return product[0];
    } else {
      return null;
    }
  }


  render() {
    const { products, categories } = this.state;

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
              render={() => <Cards products={products} />}
            />
            <Route
              exact path='/products/:id/new'
              render={() => <FormAdd onChange={this.handleChange} categories={categories} products={products} />}
            />
            <Route
              exact path='/products/:id/edit'
              render={() => <Form onChange={this.handleChange} />}
            />

            <Route
              exact path='/products/:id'
              render={({ match }) => <ProductItem
                product={this.onFilter(match.params.id)} />}
            />
            <Route
              exact path='/products'
              render={() => <Categories categories={categories} />}
            />
            <Route
              exact path='/products/:id/addcat'
              render={() => <FormCat onChange={this.handleChange} categories={categories} />}
            />
          </div>
          <hr />

        </BrowserRouter>
      </div>


    );

  }
}

export default App;