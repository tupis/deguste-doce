import React, { useContext, useState } from 'react';

//Style
import '../../sass/components/product.scss';

//Components
import AddToCart from './layout/AddToCart';
import CarouselImages from './layout/Carrousel';
import Information from '../pages/Information';
import ButtonClose from '../ButtonClose';
import { CartContext } from '../../context/index';

const Product = ( {product, back, options} ) => {
    const { addItemCart } = useContext(CartContext);

    const [inputObs, setInputObs] = useState('Sem Observação')

    const inputValue = (e) => {
        setInputObs(e.target.value)
    }

    const [option, setOption] = useState('')

    const getSelectedOption = () => {
        let radioBtns = document.querySelectorAll("input[name='option']");

        const findSelected = () => {
            let selected = document.querySelector("input[name='option']:checked")
            setOption(selected.value)
        }

        radioBtns.forEach(radioBtn => {
            radioBtn.addEventListener("change", findSelected);
        })
    }

    getSelectedOption();

    return ( 
        <div className="wrapper-product">
            <div className="product">
                <ButtonClose back={back}/>
                <CarouselImages images={product.images} />
                <div className="wrapper-info-addCart">
                    <Information product={product} setInputObs={inputValue}/>
                    <AddToCart product={product} option={option} addCart={addItemCart} obs={inputObs}/>
                </div>
            </div>
            <div className="wrapper-options">
            {
                options.map(option => 
                <div className="option" onClick={getSelectedOption}>
                    <input type="radio" name="option" value={option} id={option}/>
                    <label for="option">{option}</label>
                </div>)
            }
            </div>
        </div>
    );
}
 
export default Product;
