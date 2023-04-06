import React, { useState, useEffect } from "react";
import "../styles/Shop.css";

function Product({ match }) {
    const [productInfo, setProductInfo] = useState({});
    useEffect(() => {
        console.log(match);
        loadProduct();
    }, []);

    async function loadProduct() {
        setProductInfo(await fetchProduct());
    }

    async function fetchProduct() {
        const productData = await fetch("https://fakestoreapi.com/products/1");
        const product = await productData.json();
        console.log(product);
        return product;
    }

    return (
        <div className="shop">
            <h2 className="pageHeading">Product Details</h2>
        </div>
    );
}

export default Product;
