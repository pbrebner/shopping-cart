import React, { useState, useEffect } from "react";
import "../styles/CartItem.css";

function CartItem({ item }) {
    return (
        <div className="cartItem">
            <img className="cartItemImage" src={item.image} alt="Item Image" />
            <div>
                <p>{item.title}</p>
                <p>
                    <strong>Size: </strong>
                    {item.size}
                </p>
            </div>
            <div>
                <p>{item.qty}</p>
            </div>
            <p>{item.price}</p>
            <p>{item.price * item.qty}</p>
            <button className="deleteCartItemBtn">X</button>
        </div>
    );
}

export default CartItem;
