import { Link } from 'react-router-dom';

const Category = ( { category } ) => {

    let categoryName = ''
    if(category.name){
        categoryName = `/${(category.name).toLowerCase().replace(' ','')}`
    }

    return (
        <>  
            <div className="category">
                <div className="header-category">
                    <h1> {category.name} </h1>
                    < Link to={categoryName}>
                        <p>Veja todos</p>
                    </Link>
                </div>
                <div className='images-category'>
                    {
                        Object.values(category.products).map((product) => 
                        < Link to={`/product/${product._id}`}>
                            <img key={category.products} src={product.images[0]} alt={`${product}`}/>
                        </Link>)
                    }
                </div>
                <hr />
            </div>
        </>
    );
}
 
export default Category;