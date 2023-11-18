import { useNavigate } from "react-router-dom";
import "./styles/ProductCard.css";

function ProductCard({ product }) {
    const navigate = useNavigate();

    function navigateDetails() {
        navigate(`/shop/${product.id}`);
    }

    return (
        <div className="productCard">
            <img
                className="productCardImage"
                src={product.image}
                alt={`product ${product.id}`}
            />
            <p>{product.title}</p>
            <button className="detailsBtn" onClick={navigateDetails}>
                Details
            </button>
        </div>
    );
}

export default ProductCard;
