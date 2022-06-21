import { Link } from 'react-router-dom'

const Card = (  {product}  ) => {
    return (
        < Link className="wrapper-card" to={`/product/${product._id}`}>
            <div className="card">
                <img src={product.images[0]} alt="imagem" />
                <div className="card-information">
                    <h1> {product.name} </h1>
                    <p>R$ {product.price},00</p>
                </div>
            </div>
        </Link>
    );
}
 
export default Card;