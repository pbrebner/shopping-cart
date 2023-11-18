import { Link } from "react-router-dom";

function Nav() {
    return (
        <nav className="mainNav">
            <ul className="navLinks">
                <Link to="/" className="navLink">
                    <li>Home</li>
                </Link>
                <Link to="/shop" className="navLink">
                    <li>Shop</li>
                </Link>
                <Link to="/contact" className="navLink">
                    <li>Contact</li>
                </Link>
            </ul>
        </nav>
    );
}

export default Nav;
