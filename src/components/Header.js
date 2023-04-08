import React from "react";
import { useNavigate } from "react-router-dom";
import Nav from "./Nav";
import "../styles/Header.css";

function Header({ cartNumber }) {
    const navigate = useNavigate();

    function navigateCart() {
        navigate("/cart");
    }

    return (
        <header className="header">
            <h1 className="storeName">Store Name</h1>
            <Nav />
            <button className="cartBtn" onClick={navigateCart}>
                {cartNumber} Cart
            </button>
        </header>
    );
}

export default Header;
