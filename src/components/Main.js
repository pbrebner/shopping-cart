import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Shop from "../pages/Shop";
import Contact from "../pages/Contact";

function Main() {
    return (
        <main className="main">
            <Routes>
                <Route path="/" exact Component={Home} />
                <Route path="/shop" Component={Shop} />
                <Route path="/contact" Component={Contact} />
            </Routes>
        </main>
    );
}

export default Main;
