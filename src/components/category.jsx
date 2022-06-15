const Category = ( { category } ) => {
    return (
        <>
            <div className="category">
                <div className="header-category">
                    <h1> {category.name} </h1>
                    <p>Veja todos</p>
                </div>
                <div className='images-category'>
                    {
                        Object.keys(category.products).map((product, value) => <img key={category.products} src='https://via.placeholder.com/50px' alt={`${product}`}/>)
                    }
                </div>
                <hr />
            </div>
        </>
    );
}
 
export default Category;