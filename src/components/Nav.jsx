import { Link } from "react-router-dom";
import "./styles/Nav.css";

function Nav() {
    return (
        <nav className="mainNav">
            <ul className="navLinks">
                <Link to="/shopping-cart" className="navLink">
                    <li>Home</li>
                </Link>
                <Link to="/shopping-cart/shop" className="navLink">
                    <li>Shop</li>
                </Link>
                <Link to="/shopping-cart/contact" className="navLink">
                    <li>Contact</li>
                </Link>
            </ul>
        </nav>
    );
}

export default Nav;
