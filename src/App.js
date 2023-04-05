import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import "./styles/App.css";

function App() {
    return (
        <Router>
            <div className="app">
                <Header />
                <Main />
                <Footer />
            </div>
        </Router>
    );
}

export default App;
