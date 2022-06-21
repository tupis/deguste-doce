//Style
import '../../sass/components/product.scss';

//Components
import AddToCart from './layout/addToCart';
import CarouselImages from './layout/carrousel';
import Information from '../information';
import ButtonClose from '../buttonClose';

const Product = ( {product, back} ) => {
    return ( 
        <div className="product">
            <ButtonClose back={back}/>
            <CarouselImages images={product.images} />
            <Information product={product} />
            <AddToCart price={product.price}/>
        </div>
    );
}
 
export default Product;