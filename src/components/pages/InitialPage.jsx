import Category from '../../components/Category';

const InitialPage = ({category}) => {
    return (
        <>
        <header className='header'>
            <h1>Deguste Doce</h1>
        </header>
        {
            Object.values(category).map((category) => < Category category={category}/>)
        }
        </>
    );
}
 
export default InitialPage;