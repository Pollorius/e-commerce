import React from 'react';
//import logo from './logo.svg';
import './App.css';
import Cards from './components/Cards.jsx';
//import SearchBar from './components/SearchBar.jsx';
import Nav from './components/Nav.jsx'
import Form from './components/Forms.jsx';
//import { BrowserRouter } from 'react-router-dom';
import Home from './components/Home.jsx';
import ProductItem from './components/Product.jsx';
import FormAdd from './components/FormAdd.jsx';
import Categories from './components/Categories.jsx';
import FormCat from './components/FormCat.jsx'
// import CatCards from './components/CatCards';
// import {connect} from 'react-redux';
// import {getProducts} from './actions/ProductAction.js';
import { Route } from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom';
import Order from './components/Order.jsx'
import FormUser from './components/FormUser.jsx'

function App (){

  return(
    <BrowserRouter>
      <div className='App'> 
        
          <Route path='/' component={Nav}/>
          <Route exact path='/' component={Home} />
          <Route path='/products' component={Cards}/>
          <Route path='/products/:id' component={ProductItem}/>
          <Route path='/products/:id/edit' component={Form}/>
          <Route path='/products' component={Categories} />
          <Route path='/products/addProduct' component={FormAdd}  />
          <Route path='/products/addcat' component={FormCat}/>
          <Route path='/order' component={Order}/>
          <Route path='/formuser' component={FormUser}/>
      </div>
    </BrowserRouter>
  )
}

// class App extends Component {
//   // constructor(props) {
//   //   super(props);
//   //   this.state = { products: [], categories: [] };
//   //   this.onFilter = this.onFilter.bind(this);
//   //   this.onSearch = this.onSearch.bind(this)
//   // }
//   callApi() {
//     fetch("http://localhost:9000/products")
//       .then(res => res.json())
//       .then(res => this.setState({ products: res }))
//       .catch(err => err)
//   }
//   callApiCategory() {
//     fetch("http://localhost:9000/categories")
//       .then(res => res.json())
//       .then(res => this.setState({ categories: res }))
//       .catch(err => err)
//   }
  

//   componentWillMount() {
//     this.callApi();
//     this.callApiCategory();

//   }
//   handleChange(event) {
//     this.setState({ products: event.target.products });
//   }
//   onClose(id) {
//     this.setState(products => products.filter(c => c.id !== id));
//   }

//   onSearch(products) {
//     fetch(`http://localhost:9000/products?search=${products}`)
//       .then(res => res.json())
//       .then((res) => {
//         if (res.length > 0) {

//           this.setState({ products: res })

//         } else {
//           alert("PRODUCT NOT FOUND")
//         }

//       })
//       .catch(err => err)
//   }

//   onFilter(id) {
//     let product = this.state.products.filter(p => p.id === parseInt(id));
//     if (product.length > 0) {
//       return product[0];
//     } else {
//       return null;
//     }
//   }
//   onFilterCat(categoryId) {
//     let categorie = this.state.products.filter(p => p.categoryId === parseInt(categoryId));
//     if (categorie.length > 0) {
//       return categorie[0];
//     } else {
//       return null;
//     }
//   }

//   refreshPage() {
//     window.location.reload(true);
//   }

//   render() {
//     const { products, categories } = this.state;

//     return (
//       <div className="App">
//         <BrowserRouter>
//           <Route
//             path='/'
//             render={() => <Nav onSearch={this.onSearch} />}
//           />
//           <div>
//             <Route
//               exact
//               path='/'
//               render={() => <Home />}
//             />
//             <Route
//               exact path='/products'
//               render={() => <Cards products={products} />}
//             />
//             <Route
//               exact path='/products'
//               render={() => <Categories categories={categories} />}
//             />
//             <Route
//               exact path='/products/new'
//               render={() => <FormAdd onChange={this.handleChange} categories={categories} products={products} onClick={this.refreshPage} />}
//             />
//             <Route
//               exact path='/products/:id'
//               render={({ match }) => <ProductItem
//                 product={this.onFilter(match.params.id) } />}
//             />
//             <Route
//               exact path='/products/:id/edit'
//               render={({ match }) => <Form onChange={this.handleChange} product={this.onFilter(match.params.id)} categories={categories} onClick={this.refreshPage} />}
//             />
//             <Route
//               exact path='/products/addcat'
//               render={() => <FormCat onClick={this.refreshPage} onChange={this.handleChange} categories={categories} />}
//             />
//              
//             <Route
//               exact path='/products/findByCat'
//               render={() => <CatCards
//                 product={products} />}
//             />
//           </div>
//           <hr />

//         </BrowserRouter>
//       </div>


//     );

//   }

  
// }


export default App;