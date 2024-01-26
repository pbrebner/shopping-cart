import { useNavigate } from "react-router-dom";
import "./styles/Home.css";

function Home() {
    const navigate = useNavigate();

    function navigateShop() {
        navigate("/shopping-cart/shop");
    }

    return (
        <div className="homePage">
            <h2 className="pageHeading">This is the Home Page</h2>
            <button className="shopBtn" onClick={navigateShop}>
                Start Shopping
            </button>
        </div>
    );
}

export default Home;
