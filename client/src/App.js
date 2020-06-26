import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav.jsx'
import Cards from './components/Cards';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products:[]
    };
    this.onSearch = this.onSearch.bind(this)
  } 
  callAPI() {
    fetch(`http://localhost:9000/products`)
      .then(res => res.json())
      .then(res => this.setState({products: res}))
      .catch(err => err) 
  }
  onSearch(beer){
    fetch(`http://localhost:9000/products?search=${beer}`)
      .then(res => res.json())
      .then((res) => {  
        if(res.length > 0) {          
          this.setState({products: res}) 
        } else {
          alert("PRODUCT NOT FOUND")
        }
      })
      .catch(err => err) 
  }
  

  componentDidMount() {
    this.callAPI();
    
  }


  render() {
    const { products } = this.state
    return (
      <div>
        <div>
          <Nav onSearch={this.onSearch} />
          <Cards products={products}/>


        </div>


      </div>
    );
  }
}

export default App;
