import React, { useState, useEffect } from "react";
import { useMatch } from "react-router-dom";
import "../styles/Cart.css";

function Cart({ cartItems }) {
    return (
        <div className="cart">
            <h2>This is the cart</h2>
            <ul>
                {cartItems.map((item) => (
                    <li>
                        {item.title}, ${item.price}, QTY: {item.qty}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Cart;
