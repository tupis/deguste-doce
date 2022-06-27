import React, { useContext, useState } from 'react';

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

    const [inputObs, setInputObs] = useState('Sem Observação')

    const inputValue = (e) => {
        setInputObs(e.target.value)
    }

    return ( 
        <div className="product">
            <ButtonClose back={back}/>
            <CarouselImages images={product.images} />
            <Information product={product} setInputObs={inputValue}/>
            <AddToCart product={product} addCart={addItemCart} obs={inputObs}/>
        </div>
    );
}
 
export default Product;