import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/Shop.css";

function Shop() {
    const [productList, setProductList] = useState([]);
    useEffect(() => {
        loadProducts();
    }, []);

    async function loadProducts() {
        setProductList(filterProducts(await fetchProducts()));
    }

    async function fetchProducts() {
        const productData = await fetch("https://fakestoreapi.com/products");
        const products = await productData.json();
        return products;
    }

    const filterProducts = (products) => {
        return products.filter(
            (product) =>
                product.category === `men's clothing` ||
                product.category === `women's clothing`
        );
    };

    return (
        <div className="shop">
            <h2 className="pageHeading">Shop Page</h2>
            {productList.map((product) => (
                <h3 key={product.id}>
                    <Link to={`/shop/${product.id}`}>{product.title}</Link>
                </h3>
            ))}
        </div>
    );
}

export default Shop;
