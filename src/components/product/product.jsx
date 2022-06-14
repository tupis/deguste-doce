//Style
import '../../sass/components/product.scss'

//Componets
import AddToCart from './layout/addToCart'
import CarouselImages from './layout/carrousel'
import Information from './layout/information'

//Image Test
import Img1 from '../../images/img1.png'
import Img2 from '../../images/img2.png'
    // images sempre de 1:1

//Fake api
const product = {
    name: 'Bolo 10KG',
    price: 300,
    description: 'Contém pasta americana, e pasta de amendoim',
    images: [Img1, Img2, Img1]
}

const Product = () => {
    return ( 
        <div className="product">
            <CarouselImages images={product.images} />
            <Information product={product} />
            < AddToCart price={product.price}/>
        </div>
    );
}
 
export default Product;