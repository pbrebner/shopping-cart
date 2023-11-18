import { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

import "./App.css";

function App() {
    let [cartItems, setCartItems] = useState([]);
    let [cartNumber, setCartNumber] = useState(0);

    return (
        <Router>
            <div className="app">
                <Header cartNumber={cartNumber} />
                <Main />
                <Footer />
            </div>
        </Router>
    );
}

export default App;
