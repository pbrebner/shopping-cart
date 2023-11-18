import { useNavigate } from "react-router-dom";

import Nav from "./Nav";
import "./styles/Header.css";
import cartIcon from "../assets/shopping-cart.png";

function Header({ cartNumber }) {
    const navigate = useNavigate();

    function navigateCart() {
        navigate("/cart");
    }

    return (
        <header className="header">
            <div className="headerInnerWrapper">
                <h1 className="storeName">Store Name</h1>
                <Nav />
                <button className="cartBtn" onClick={navigateCart}>
                    {cartNumber}
                    <img className="cartIcon" src={cartIcon} alt="Cart Icon" />
                </button>
            </div>
        </header>
    );
}

export default Header;
