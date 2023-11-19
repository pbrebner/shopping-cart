import { useState, useEffect } from "react";

import CartItem from "../components/CartItem";
import { priceAddZero } from "../utils/cartUtils";
import "./styles/Cart.css";

function Cart({ cartItems, deleteCartItem, updateCartItemQty }) {
    let [cartTotal, setCartTotal] = useState(0);

    useEffect(() => {
        let total = 0;
        for (const item of cartItems) {
            total += item.price * item.qty;
        }
        setCartTotal(priceAddZero(total));
    });

    return (
        <div className="cartPage">
            <h2 className="pageHeading">Shopping Cart</h2>
            <div className="cartInnerWrapper">
                <div className="cartItems">
                    <div className="cartItemsHead">
                        <p>ITEM(S)</p>
                        <div>
                            <p>QTY</p>
                            <p>PRICE</p>
                            <p>TOTAL</p>
                        </div>
                    </div>
                    {cartItems.length === 0 ? (
                        <p className="emptyCart">
                            There is currently nothing in your cart
                        </p>
                    ) : (
                        cartItems.map((item) => (
                            <CartItem
                                key={item.id}
                                item={item}
                                deleteCartItem={deleteCartItem}
                                updateCartItemQty={updateCartItemQty}
                            />
                        ))
                    )}
                </div>
                <div className="orderSummary">
                    <div className="orderSummaryDetails">
                        <h3>ORDER SUMMARY</h3>
                        <div>
                            <p>Subtotal:</p>
                            <p>${cartTotal}</p>
                        </div>
                        <div>
                            <p>Shipping:</p>
                            <p>Free</p>
                        </div>
                        <div>
                            <p>Discounts:</p>
                            <p>None</p>
                        </div>
                        <div>
                            <p>
                                <strong>Estimated Total:</strong>
                            </p>
                            <p>
                                <strong>${cartTotal}</strong>
                            </p>
                        </div>
                    </div>
                    <button className="checkoutBtn">CHECKOUT</button>
                </div>
            </div>
        </div>
    );
}

export default Cart;
