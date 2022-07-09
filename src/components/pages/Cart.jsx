import { useContext } from "react";
import { CartContext } from "../../context";
import CartItem from "../CartItem";

import Purchase from "../Purchase";

const Cart = () => {
    const { cartItem } = useContext(CartContext)
    return (
        <div className="shopping-cart">
            <div className="header">
                <h1>Carrinho</h1>
            </div>
            {cartItem.length > 0 
                ? [cartItem.map(product => < CartItem product={product}/>), < Purchase /> ]
                : <p className='add-item-cart-warning'>
                    <span class="material-symbols-outlined">
                        sentiment_dissatisfied
                    </span>
                    <p>Por favor insira algum item no seu carrinho!</p>
                  </p>
            }
        </div>
    );
}
 
export default Cart;