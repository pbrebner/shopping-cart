import React from "react";
import { Link } from "react-router-dom";

function Nav() {
    return (
        <nav className="mainNav">
            <ul>
                <Link to="/">
                    <li>Home</li>
                </Link>
                <Link to="/shop">
                    <li>Shop</li>
                </Link>
                <Link to="/contact">
                    <li>Contact</li>
                </Link>
            </ul>
        </nav>
    );
}

export default Nav;
