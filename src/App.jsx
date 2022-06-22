import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import './sass/index.scss'
import API from './services/axios'

import InitialPage from './components/initialPage';
import Product from './components/product/product';
import About from './components/about';
import NavBar from "./components/navBar";
import { useEffect, useState } from "react";
import Products from './components/products';
import CartProvider from './context/index';
import Cart from "./components/cart";

const App = () => {
  const [category, setCategory] = useState({})

  useEffect(()=>{
    API.get('category').then(({data}) => {
      setCategory(data);
    })

    // eslint-disable-next-line
  }, [])

  return (
    <Router>
      < CartProvider >
        < NavBar />
        < Routes >
          < Route path="/" element={ < InitialPage category={category} /> } />
          < Route path="/shopping_cart" element={ < Cart /> } />
          < Route path="/about" element={ < About /> } />
          < Route path='/product' element={ < Product /> } />
          {
            // eslint-disable-next-line
            Object.values(category).map(category => < Route path={`/${(category.name).toLowerCase().replace(' ','')}`} element={ < Products category={category} /> } />) 
          }
          {
            Object.values(category).map(category => category.products.map(product => < Route path={`/product/${product._id}`} element={ < Product product={product} back={`/${(category.name).toLowerCase().replace(' ','')}`} /> } />))
          }
        </Routes>
      </CartProvider>
    </Router>
  );
}
 
export default App;