import { useContext, useState, useEffect } from "react"
import { CartContext } from "../../../context"

const AddToCart = ( {product, addCart, obs} ) => {

    const [count, setCount] = useState(1)
    const [totalPriceProduct, setTotalPriceProduct] = useState(product.price)

    const { addMessageToArray, addTotalPrice } = useContext(CartContext)

    const counterIncrease = () => {
        setCount(count + 1);
    }

    const counterDecrease = () => {
        if(count === 1){
            setCount(1)
        }else if(count < 0){
            setCount(1)
        }else{
            setCount(count - 1);
        }
    }

    const animationAddCart = () => {;
        const buttonAddCart = document.querySelector('.add-cart')
        buttonAddCart.classList.add('animation');
        setTimeout(()=>{
            buttonAddCart.classList.remove('animation');
        }, 2000)
    }

    const handleOnClick = () => {
        addTotalPrice(product._id, totalPriceProduct);
        addCart(product._id, count, totalPriceProduct);
        addMessageToArray(product.name, count, obs , product._id);
        animationAddCart();
    }

    
    useEffect(() => {
        setTotalPriceProduct(count * product.price);
    },[count])

    return (
        <div className="wrapper-button-product">
            <div className="count-product">
                <button onClick={counterDecrease}> - </button>
                <button> {count} </button>
                <button onClick={counterIncrease}> + </button>
            </div>
            
            <button className='add-cart' onClick={handleOnClick}> 
                <div className='text-area'>
                    <span class="material-symbols-outlined" id="cart">
                        shopping_cart
                    </span>
                    <p>Adicionar ao carrinho</p>
                </div>
                <p> R$ {totalPriceProduct},00 </p>
            </button>
        </div>
    );
}
 
export default AddToCart;