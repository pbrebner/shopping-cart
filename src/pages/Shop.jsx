import { useState, useEffect } from "react";
import ProductCard from "../components/ProductCard";

import "./styles/Shop.css";

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
        <div className="shopPage">
            <h2 className="pageHeading">Shop Page</h2>
            <div className="productCards">
                {productList.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
}

export default Shop;
