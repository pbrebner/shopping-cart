import React, { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import "./styles/App.css";

function App() {
    let [cartItems, setCartItems] = useState([]);
    let [cartNumber, setCartNumber] = useState(0);

    function incrementCart(incrementValue = 1) {
        let currentNumber = cartNumber;
        setCartNumber(currentNumber + incrementValue);
    }

    function decrementCart(decrementValue = 1) {
        let currentNumber = cartNumber;
        setCartNumber(currentNumber + decrementValue);
    }

    function addCartItem(productInfo, qty) {
        console.log(productInfo);
        let currentItemList = cartItems;
        //Need to check current cart items and add to qty if item already in cart
        for (const item of currentItemList) {
            if (item.id === productInfo.id) {
                item.qty = item.qty + qty;
                //console.log(currentItemList);
                setCartItems(currentItemList);
                return;
            }
        }
        //If no repeated item, append to list (id, title, price, numberOfItems)
        currentItemList.push({
            id: productInfo.id,
            title: productInfo.title,
            price: productInfo.price,
            qty: qty,
        });

        //console.log(currentItemList);

        setCartItems(currentItemList);
    }

    return (
        <Router>
            <div className="app">
                <Header cartNumber={cartNumber} />
                <Main
                    cartItems={cartItems}
                    addCartItem={addCartItem}
                    incrementCart={incrementCart}
                />
                <Footer />
            </div>
        </Router>
    );
}

export default App;
