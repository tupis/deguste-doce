import { Link } from 'react-router-dom';

const ButtonClose = ( {back} ) => {
    return (
        <Link className='button-close' to={back}>
            <span className="material-symbols-outlined">
                Close
            </span>
        </Link>
    );
}
 
export default ButtonClose;