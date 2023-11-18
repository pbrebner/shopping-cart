import { useNavigate } from "react-router-dom";

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
