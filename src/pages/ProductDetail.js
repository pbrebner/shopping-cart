import React, { useState, useEffect } from "react";
import { useMatch } from "react-router-dom";
import "../styles/ProductDetails.css";

function Product({ addCartItem, incrementCart }) {
    let [productInfo, setProductInfo] = useState({});
    let [qty, setQty] = useState(1);
    const match = useMatch("/shop/:id");

    useEffect(() => {
        loadProduct();
    }, []);

    async function loadProduct() {
        setProductInfo(await fetchProduct());
    }

    async function fetchProduct() {
        const productData = await fetch(
            `https://fakestoreapi.com/products/${match.params.id}`
        );
        const product = await productData.json();
        return product;
    }

    return (
        <div className="productDetails">
            <div className="productImages">
                <img className="productImage" src={productInfo.image} />
            </div>
            <div className="productInfo">
                <h2 className="productName">{productInfo.title}</h2>
                <p className="productPrice">$ {productInfo.price}</p>
                <p className="productDescription">{productInfo.description}</p>
                <div className="sizes">
                    <p>Sizes:</p>
                    <div className="sizeBtns">
                        <button className="sizeBtn smallBtn">Small</button>
                        <button className="sizeBtn mediumBtn">Medium</button>
                        <button className="sizeBtn largeBtn">Large</button>
                        <button className="sizeBtn xLargeBtn">X-Large</button>
                    </div>
                </div>
                <div className="qty">
                    <p>QTY:</p>
                    <div className="qtyControls">
                        <button className="qtyBtn">-</button>
                        <div className="qtyDisplay">{qty}</div>
                        <button className="qtyBtn">+</button>
                    </div>
                </div>
                <button
                    className="addCartBtn"
                    onClick={() => {
                        addCartItem(productInfo, qty);
                        incrementCart(qty);
                    }}
                >
                    Add to Cart
                </button>
            </div>
        </div>
    );
}

export default Product;
