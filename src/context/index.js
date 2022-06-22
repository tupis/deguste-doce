import { createContext, useState } from 'react';

export const CartContext = createContext({});

const CartProvider = ({ children }) => {

    // eslint-disable-next-line
    const [cartItem, setCartItem] = useState([])

    // eslint-disable-next-line
    const [totalProduct, setTotalProduct] = useState([])

    const addItemCart = (id, qtd, totalPrice) => {
        const item = cartItem.find(product => product[0] === id);
        if(!item){
            cartItem.push([id, qtd, totalPrice]);
        }else{
            let index = cartItem.indexOf(item);
            cartItem[index][1] = qtd;
            cartItem[index][2] = totalPrice;
        }
        console.log(cartItem);
    }

    return (
    < CartContext.Provider value={{ addItemCart, cartItem, totalProduct }} > 
        {children} 
    </CartContext.Provider>
    );
}

export default CartProvider;