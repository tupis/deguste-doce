import Card from '../Card';
import { Link } from 'react-router-dom'

const Products = ( {category} ) => {
    return (
        <div className="products">
            <div className="header">
                < Link to="/">
                    <span class="material-symbols-outlined">
                        arrow_back_ios
                    </span>
                </Link>
                <h1>Bolos</h1>
            </div>
            <div className="cards">
                {
                    Object.values(category.products).map(product => < Card product={product}/>)
                }
            </div>
        </div>
    );
}
 
export default Products;