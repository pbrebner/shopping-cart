import { useState, useEffect } from "react";
import { useMatch } from "react-router-dom";
import { priceAddZero } from "../utils/cartUtils";

import "./styles/ProductDetails.css";

function ProductDetails({ addCartItem }) {
    let [productInfo, setProductInfo] = useState({});
    let [qty, setQty] = useState(1);
    let [sizeSelection, setSizeSelection] = useState("");

    const match = useMatch("/shopping-cart/shop/:id");

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
        product.price = priceAddZero(product.price);

        return product;
    }

    function incrementQty() {
        let currentQty = qty;
        setQty(currentQty + 1);
    }

    function decrementQty() {
        let currentQty = qty;
        if (currentQty !== 1) {
            setQty(currentQty - 1);
        }
    }

    function handleSizeSelection(e) {
        const selectSizePrompt = document.querySelector(".selectSizePrompt");
        const sizeBtns = document.querySelectorAll(".sizeBtn");

        selectSizePrompt.classList.add("hidePrompt");

        sizeBtns.forEach((btn) => {
            btn.classList.remove("selectedSize");
        });

        let targetBtn = e.target;
        targetBtn.classList.add("selectedSize");
        setSizeSelection(targetBtn.id);
    }

    function handleAddCart() {
        if (sizeSelection === "") {
            const selectSizePrompt =
                document.querySelector(".selectSizePrompt");
            selectSizePrompt.classList.remove("hidePrompt");
        } else {
            addCartItem(productInfo, sizeSelection, qty);
        }
    }

    return (
        <div className="productDetailsPage">
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
                        <button
                            id="small"
                            className="sizeBtn smallBtn"
                            onClick={handleSizeSelection}
                        >
                            Small
                        </button>
                        <button
                            id="medium"
                            className="sizeBtn mediumBtn"
                            onClick={handleSizeSelection}
                        >
                            Medium
                        </button>
                        <button
                            id="large"
                            className="sizeBtn largeBtn"
                            onClick={handleSizeSelection}
                        >
                            Large
                        </button>
                        <button
                            id="x-large"
                            className="sizeBtn xLargeBtn"
                            onClick={handleSizeSelection}
                        >
                            X-Large
                        </button>
                    </div>
                </div>
                <div className="qty">
                    <p>QTY:</p>
                    <div className="qtyControls">
                        <button className="qtyBtn" onClick={decrementQty}>
                            -
                        </button>
                        <div className="qtyDisplay">{qty}</div>
                        <button className="qtyBtn" onClick={incrementQty}>
                            +
                        </button>
                    </div>
                </div>
                <button className="addCartBtn" onClick={handleAddCart}>
                    Add to Cart
                </button>
                <p className="selectSizePrompt hidePrompt">
                    Please select a size
                </p>
            </div>
        </div>
    );
}

export default ProductDetails;
