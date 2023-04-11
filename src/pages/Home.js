import React from "react";
import { useNavigate } from "react-router-dom";

import "../styles/Home.css";

function Home() {
    const navigate = useNavigate();

    function navigateShop() {
        navigate("/shop");
    }

    return (
        <div className="home">
            <button className="shopBtn" onClick={navigateShop}>
                Start Shopping
            </button>
        </div>
    );
}

export default Home;
