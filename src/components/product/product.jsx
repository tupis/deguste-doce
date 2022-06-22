import React, { useContext } from 'react';

//Style
import '../../sass/components/product.scss';

//Components
import AddToCart from './layout/addToCart';
import CarouselImages from './layout/carrousel';
import Information from '../information';
import ButtonClose from '../buttonClose';
import { CartContext } from '../../context/index';

const Product = ( {product, back} ) => {

    const { addItemCart } = useContext(CartContext);

    return ( 
        <div className="product">
            <ButtonClose back={back}/>
            <CarouselImages images={product.images} />
            <Information product={product} />
            <AddToCart product={product} addCart={addItemCart} />
        </div>
    );
}
 
export default Product;