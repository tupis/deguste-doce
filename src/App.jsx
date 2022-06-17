import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import './sass/index.scss'

import InitialPage from './components/initialPage';
import Product from './components/product/product';
import About from './components/about';

import NavBar from "./components/navBar";

import Products from './components/products';

const category = {
  bolos: {
      name: "Bolos",
      products: {
          umKG: {
              name: "Bolo 1KG",
              description: "Contem pasta americana",
              price: 50,
              images: ['img1', 'img2']
          },
          cincoKG: {
              name: "Bolo 5KG",
              description: "Não contém pasta americana",
              price: 120,
              images: ['img1', 'img2']
          },
          dezKG: {
              name: "Bolo 10KG",
              description: "Não contém pasta americana",
              price: 300,
              images: ['img1', 'img2']
          }
      }
  },
  doces: {
      name: "Doces",
      products: {
          brigadeiro: {
              name: 'Brigadeiro',
              description: 'Brigadeiro',
              price: 1

          },
          cupcake: {
              name: "Cupcake",
              description: "os sabores são variados",
              price: 20
          }
      }
  },
  salgados: {
      name: 'Salgados',
      products: {
          centroSalgados: {
              name: "Centro de Salgados",
              description: "Você escolhe os tipos de salgados",
              price: 120
          },
          meioSalgados: {
              name: "Metade de um centro de Salgados",
              description: "Você escolhe os tipos de salgados",
              price: 60
          }
      }
  },
}

////// A API VAI SER PUXADA DAQUI E SERÁ PASSADA PARA OS FILHOS lembre a mim mesmo

const App = () => {
  return (
    <Router>
      < NavBar />
      < Routes >
        < Route path="/" element={ < InitialPage /> } />
        {/* < Route path="/shopping_cart" element={ < Cart /> } /> */}
        < Route path="/about" element={ < About /> } />
        {
          Object.values(category).map(categoryName => < Route path={`/${(categoryName.name).toLowerCase().replace(' ', '')}`} element={ < Products /> } />)
        }
      </Routes>
    </Router>
    
  );
}
 
export default App;