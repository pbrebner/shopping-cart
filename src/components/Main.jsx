import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Shop from "../pages/Shop";
import Contact from "../pages/Contact";
import ProductDetails from "../pages/ProductDetails";
import Cart from "../pages/Cart";

import "./styles/Main.css";

function Main({ cartItems, addCartItem, deleteCartItem, updateCartItemQty }) {
    return (
        <main className="main">
            <Routes>
                <Route path="/shopping-cart" exact element={<Home />} />
                <Route path="/shopping-cart/shop" exact element={<Shop />} />
                <Route
                    path="/shopping-cart/shop/:id"
                    element={<ProductDetails addCartItem={addCartItem} />}
                />
                <Route
                    path="/shopping-cart/cart"
                    element={
                        <Cart
                            cartItems={cartItems}
                            deleteCartItem={deleteCartItem}
                            updateCartItemQty={updateCartItemQty}
                        />
                    }
                />
                <Route path="/shopping-cart/contact" element={<Contact />} />
            </Routes>
        </main>
    );
}

export default Main;
