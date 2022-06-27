import { useContext } from "react";
import { CartContext } from "../context";
import CartItem from "./cartItem";

import '../sass/pages/cart.scss';
import Purchase from "./purchase";

const Cart = () => {
    const { cartItem } = useContext(CartContext)
    return (
        <div className="shopping-cart">
            <div className="header">
                <h1>Carrinho</h1>
            </div>
            {cartItem.length > 0 
                ? [cartItem.map(product => < CartItem product={product}/>), < Purchase /> ]
                : <p className='add-item-cart-warning'>Por favor insira algum item no seu carrinho =(</p>
            }
        </div>
    );
}
 
export default Cart;