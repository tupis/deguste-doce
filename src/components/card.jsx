import Img from '../images/img1.png'

const Card = (  {product, key}  ) => {
    return (
        <a className="wrapper-card" href="#" key={key}> 
            <div className="card">
                <img src={Img} alt="imagem" />
                <div className="card-information">
                    <h1> {product.name} </h1>
                    <p>R$ {product.price},00</p>
                </div>
            </div>
        </a>
    );
}
 
export default Card;