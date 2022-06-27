import { useContext } from 'react';
import '../sass/components/buttonPurchase.scss';
import { CartContext } from "../context";

const Purchase = () => {

    const { sendToWhatsapp, totalPrice } = useContext(CartContext)

    return (
        <div className="wrapper-link-purchase">
            <p>Total: R$ {totalPrice},00</p>
            <p>Ao clicar em <span>Finalizar compra</span>, você será redirecionado ao whatsapp, basta clicar em enviar e tudo pronto =)</p>
            <a href={sendToWhatsapp()} className='link-purchase'>
                <button className="purchase">Finalizar Compra</button>
            </a>
        </div>
    );
}
 
export default Purchase;