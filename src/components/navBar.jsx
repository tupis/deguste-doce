import { Link } from 'react-router-dom';

import '../sass/components/navBar.scss';


const NavBar = () => {
    return (
        <nav className="nav-bar">
            <Link to='/'>
                <span className="material-symbols-outlined">
                    restaurant_menu
                </span>
                Cardápio
            </Link>
            <Link to='/shopping_cart'>
                <span className="material-symbols-outlined">
                    shopping_cart_checkout
                </span>
                Carrinho
            </Link>
            <Link to='/about'>
                <span className="material-symbols-outlined">
                    more_horiz
                </span>
                Informações
            </Link>
        </nav>
    );
}
 
export default NavBar;