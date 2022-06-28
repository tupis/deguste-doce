import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { useEffect, useState } from "react";

import API from './services/axios'

import './sass/index.scss'

//Components
import InitialPage from "./components/pages/InitialPage";
import Product from './components/product/product';
import About from './components/About';
import NavBar from "./components/pages/NavBar";
import Products from './components/pages/Products';
import CartProvider from './context/index';
import Cart from "./components/pages/Cart";


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
            Object.values(category).map((category, key) => < Route path={`/${(category.name).toLowerCase().replace(' ','')}`} element={ < Products category={category} /> } key={key} />) 
          }
          {
            // eslint-disable-next-line
            Object.values(category).map(category => category.products.map(product => < Route path={`/product/${product._id}`} element={ < Product product={product} back={`/${(category.name).toLowerCase().replace(' ','')}`} /> } />))
          }
        </Routes>
      </CartProvider>
    </Router>
  );
}
 
export default App;