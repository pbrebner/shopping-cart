import { useNavigate } from "react-router-dom";

import Nav from "./Nav";
import "./styles/Header.css";
import cartIcon from "../assets/shopping-cart.png";

function Header({ cartNumber }) {
    const navigate = useNavigate();

    function navigateCart() {
        navigate("/shopping-cart/cart");
    }

    return (
        <header className="header">
            <div className="headerInnerWrapper">
                <h1 className="storeName">Fake Store</h1>
                <Nav />
                <button className="cartBtn" onClick={navigateCart}>
                    <img className="cartIcon" src={cartIcon} alt="Cart Icon" />
                    <div>YOUR CART</div>
                    <div>({cartNumber})</div>
                </button>
            </div>
        </header>
    );
}

export default Header;
