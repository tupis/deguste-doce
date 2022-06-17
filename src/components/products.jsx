import '../sass/pages/products.scss'
import Card from './card';

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

const Products = () => {
    return (
        <div className="products">
            <div className="header">
                <span class="material-symbols-outlined">
                    arrow_back_ios
                </span>
                <h1>Bolos</h1>
            </div>
            <div className="cards">
                {
                    Object.values(category.bolos.products).map((product, key) => < Card product={product} key={key}/>)
                }
                
            </div>
        </div>
    );
}
 
export default Products;