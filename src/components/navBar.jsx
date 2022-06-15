import '../sass/components/navBar.scss'

const NavBar = () => {
    return (
        <nav className="nav-bar">
            <a href="#">
                <span class="material-symbols-outlined">
                    restaurant_menu
                </span>
                Cardápio
            </a>
            <a href="#">
                <span class="material-symbols-outlined">
                    shopping_cart_checkout
                </span>
                Carrinho
            </a>
            <a href="#">
                <span class="material-symbols-outlined">
                    more_horiz
                </span>
                Informações
            </a>
        </nav>
    );
}
 
export default NavBar;