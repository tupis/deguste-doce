import { createContext, useState } from 'react';
import API from '../services/axios'

export const CartContext = createContext({});

const CartProvider = ({ children }) => {

// MEXER COM O CARRINHO 

    const [cartItem, setCartItem] = useState([])

    const addItemCart = (id, qtd, totalPrice) => { // Adiciona/Atualiza item no carrinho
        const item = cartItem.find(product => product[0] === id);
        if(!item){
            cartItem.push([id, qtd, totalPrice]);
        }else{
            let index = cartItem.indexOf(item);
            cartItem[index][1] = qtd;
            cartItem[index][2] = totalPrice;
        }

        sendProduct();
        calcTotalPrice();
    }

    const removeItemCart = (id) => { // Remove item do carrinho
        const item = cartItem.find(product => product[0] === id);
        const index = cartItem.indexOf(item);
        cartItem.splice(index, 1);
        const newArray = [...cartItem];
        setCartItem(newArray);

        removeTotalPrice(id);
        removeMessageFromArray(id);
        calcTotalPrice();
    }

    // eslint-disable-next-line
    const [products, setProducts] = useState([]); // Produtos recebidos via api
    const sendProduct = (cart = cartItem) => {
        cart.map(
            product => API.get(`product/${product[0]}`)
            .then(({data}) => {
                products.push(data);
            })
        )
    }


// MEXER COM PREÇOS

    // eslint-disable-next-line
    const [totalProduct, setTotalProduct] = useState([]) // Recebe os valores de todos os produtos
    
    // eslint-disable-next-line

    const addTotalPrice = (id, totalPriceProduct) => {  // Adiciona/Atualiza o preço dos produtos enviados a 'totalProduct'
        const item = totalProduct.find(product => product[0] === id);
        if(!item){
            totalProduct.push([id, totalPriceProduct]);
        }else{
            let index = totalProduct.indexOf(item);
            totalProduct[index][1] = totalPriceProduct;  
        }
    }

    const removeTotalPrice = (id) => {  // Remove o preço dos produtos enviados a 'totalProduct'
        const item = totalProduct.find(product => product[0] === id);
        const index = totalProduct.indexOf(item);
        totalProduct.splice(index, 1);
        const newArray = [...totalProduct];
        setTotalProduct(newArray);
    }

    let totalPrice;

    const calcTotalPrice = () => {  // Calcula o preço total dos valores inseridos no 'totalProduct'
        totalPrice = 0;
        totalProduct.map(product => totalPrice += product[1]);
        console.log(totalPrice);
    }


// MEXER COM MENSAGEM A SER ENVIADA PELO WHATSAPP
    // eslint-disable-next-line
    const [messageArray, setMessageArray] = useState([]) // Recebe as mensagens de cada produto

    const initialMessage = `Olá, gostaria de encomendar:`; // Mensagem cabeçalho

    let messagesProducts = `` // Recebe todas as mensagens de cada produto em formato de String

    const removeMessageFromArray = (id) =>{ // Remove um produto da mensagem
        const item = messageArray.find(product => product[0] === id);
        const index = messageArray.indexOf(item);
        messageArray.splice(index, 1);
        const newArray = [...messageArray];
        setMessageArray(newArray);

        concatMessageProducts();
    }
    
    const addMessageToArray = (name, qtd, obs, id) => { // Adiciona/Atualiza uma mensagem com identificador no messageArray
        let message = [
            id,
            `
            ${name}
            Observação: ${obs}
            Quantidade: ${qtd}
            `
        ];
        const item = messageArray.find(product => product[0] === id);
        if(!item){
            messageArray.push(message)
        }else{
            let index = messageArray.indexOf(item)
            messageArray[index][1] = `
            ${name}
            Observação: ${obs}
            Quantidade: ${qtd}
            `;
        }

        concatMessageProducts();
    }
    const concatMessageProducts = () => { // Junta as mensagem em formato de string na variável "messagesProducts"
        messagesProducts = '';
        for(let message of messageArray){
            messagesProducts = messagesProducts.concat(message[1])
        }
    }

    const sendToWhatsapp = () => {
        const messageFinal = initialMessage.concat(messagesProducts)  // Adiciona cabeçalho aos produtos de mensagem
    
        const URLEncoder = messageFinal.replace(/ /gmi,'%20').replace(/\s/gmi, '%0A') // Transforma mensagem Final em URLEncoder

        const APIWhats = `https://api.whatsapp.com/send?phone=5598991739443&text=${URLEncoder}`
        console.log(APIWhats);
    }

    return (
    < CartContext.Provider value={{ addItemCart, cartItem, removeItemCart, addMessageToArray, sendToWhatsapp, addTotalPrice, totalPrice }} > 
        {children} 
    </CartContext.Provider>
    );
}

export default CartProvider;