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
                        Object.keys(category.products).map((product) => <img key={category.products} src='https://via.placeholder.com/50px' alt={`${product}`}/>)
                    }
                </div>
                <hr />
            </div>
        </>
    );
}
 
export default Category;