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
            <h2 className="pageHeading">Home Page</h2>
            <button className="shopBtn" onClick={navigateShop}>
                Start Shopping
            </button>
        </div>
    );
}

export default Home;
