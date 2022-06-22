import { useContext } from "react";
import { CartContext } from "../context";
import CartItem from "./cartItem";

import '../sass/pages/cart.scss';

const Cart = () => {
    const { cartItem } = useContext(CartContext)
    return (
        <div className="shopping-cart">
            <div className="header">
                <h1>Carrinho</h1>
            </div>
            {
                cartItem.map(product => < CartItem product={product}/>)
            }
        </div>
    );
}
 
export default Cart;