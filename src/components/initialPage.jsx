import '../sass/pages/initialPage.scss'
import Category from './category';

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