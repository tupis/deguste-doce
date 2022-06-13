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
    name: 'Bolo 5KG',
    price: 150,
    description: 'Contém pasta americana, voce pode escolher o recheio',
    images: [Img1, Img2, Img1, Img2, Img1, Img2]
}

const Product = () => {
    return ( 
        <>
            <div className="product">
                <CarouselImages images={product.images} />
                <Information product={product} />
                < AddToCart price={product.price}/>
            </div>
        </>
    );
}
 
export default Product;