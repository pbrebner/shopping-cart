import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";

function Main() {
    return (
        <main className="main">
            <Routes>
                <Route path="/" exact element={<Home />} />
            </Routes>
        </main>
    );
}

export default Main;
