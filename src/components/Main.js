import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Shop from "../pages/Shop";
import Contact from "../pages/Contact";
import Product from "../pages/ProductDetail";
import Cart from "../pages/Cart";

function Main({ cartItems, addCartItem, deleteCartItem, updateCartItemQty }) {
    return (
        <main className="main">
            <Routes>
                <Route path="/" exact element={<Home />} />
                <Route path="/shop" exact element={<Shop />} />
                <Route
                    path="/shop/:id"
                    element={<Product addCartItem={addCartItem} />}
                />
                <Route
                    path="/cart"
                    element={
                        <Cart
                            cartItems={cartItems}
                            deleteCartItem={deleteCartItem}
                            updateCartItemQty={updateCartItemQty}
                        />
                    }
                />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </main>
    );
}

export default Main;
