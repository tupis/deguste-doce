import { useState, useEffect } from 'react'
import API from '../services/axios'


const CartItem = ({ product }) => {
    const [productAPI, setProductAPI] = useState({})

    useEffect(()=>{
        API.get(`/product/${product[0]}`).then(({data}) => {
            setProductAPI(data);
        });
        // eslint-disable-next-line
    }, [])

    return (
        <div className="cartItem">
            <div className="wrapper-product">
                <div className="wrapper-title-qtd">
                    <p className="quantity">{product[1]}x</p>
                    <h1 className="title-product">{productAPI.name}</h1>
                </div>
                <button className="btn-remove">Remover</button>
            </div>
            <p className="subtotal-product">R$ {product[2]},00 </p>
            <hr />
        </div>
    );
}
 
export default CartItem;