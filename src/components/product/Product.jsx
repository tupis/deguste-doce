import React, { useContext, useState } from 'react';

//Style
import '../../sass/components/product.scss';

//Components
import AddToCart from './layout/AddToCart';
import CarouselImages from './layout/Carrousel';
import Information from '../pages/Information';
import ButtonClose from '../ButtonClose';
import { CartContext } from '../../context/index';

const Product = ( {product, back} ) => {
    const { addItemCart } = useContext(CartContext);

    const [inputObs, setInputObs] = useState('Sem Observação')

    const inputValue = (e) => {
        setInputObs(e.target.value)
    }

    return ( 
        <div className="wrapper-product">
            <div className="product">
                <ButtonClose back={back}/>
                <CarouselImages images={product.images} />
                <div className="wrapper-info-addCart">
                    <Information product={product} setInputObs={inputValue}/>
                    <AddToCart product={product} addCart={addItemCart} obs={inputObs}/>
                </div>
            </div>
        </div>
    );
}
 
export default Product;
