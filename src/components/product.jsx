import '../sass/components/product.scss'

import Carousel from "react-elastic-carousel"

import ImageTest from '../images/teste1.png'
import ImageTest2 from '../images/teste2.png'


const Product = () => {

    const breakPoints = [
        { width: 1, itemsToShow: 1 },
        { width: 550, itemsToShow: 2, itemsToScroll: 2},
        { width: 768, itemsToShow: 3},
        { width: 1200, itemsToShow: 4 }
    ]

    const product = {
        name: 'Bolo 5Kg',
        price: 70,
        description: 'Contem pasta americana, recheio de sua preferência, nao sei mais oq lorem100'
    }
    
    let teste = [ImageTest, ImageTest2, ImageTest, ImageTest2,ImageTest, ImageTest2, ImageTest, ImageTest2] 

    return ( 
        <>
            <div className="product">
                <div className="container">
                    <div className="carousel-wrapper">
                        < Carousel breakPoints={breakPoints}>
                            {teste.map(item => <img src={item} alt='Imagem do produto'/>)}
                        </ Carousel >
                    </div>
                </div>
                <div className="information">
                    <h1>{product.name}</h1>
                    <p>Preço: R${product.price},00</p>
                    <p>Descrição: {product.description}</p>
                </div>
                <div className='observation'>
                    Observações:
                    <textarea name="" id="" placeholder='Observações'></textarea>
                </div>
                <div className="wrapper-button-product">
                    <button> Adicionar carrinho</button>
                </div>
            </div>
        </>
    );
}
 
export default Product;