import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Home from './components/home/Home'
import Nav from './components/home/Nav'
import Cards from './components/products/Cards'
import ProductItem from './components/products/Product.jsx'
import Categories from './components/categories/Categories'
import CatCards from './components/categories/CatCards'
import FormEditProd from './components/forms/FormEditProd'
import FormAddProd from './components/forms/FormAddProd'
import FormAddCat from './components/forms/FormAddCat'
import FormAddUser from './components/forms/FormAddUser'
import Order from './components/cart/Order'
import './App.css'

function App () {
  return (
    <BrowserRouter>
      <div className='App'>
        <Route path='/' component={Nav} />
        <Route exact path='/' component={Home} />
        <Route exact path='/products' component={Cards} />
        <Route exact path='/products/:id' component={ProductItem} />
        <Route exact path='/products/:id/findByCat' component={CatCards} />
        <Route exact path='/products/:id/edit' component={FormEditProd} />
        <Route exact path='/products' component={Categories} />
        <Route exact path='/products/:id/addProduct' component={FormAddProd} />
        <Route exact path='/products/:id/addcat' component={FormAddCat} />
        <Route exact path='/orders/:id' component={Order} />
        <Route exact path='/formuser' component={FormAddUser} />
      </div>
    </BrowserRouter>
  )
}

export default App
