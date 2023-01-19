import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../../pages/Home";
import Coffee from "../../pages/Coffee";
import Goods from "../../pages/Goods";
import Footer from "../footer";
import NotFound from "../../pages/NotFound";


const App = () => {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/coffee" element={<Coffee />} />
                <Route path="/goods" element={<Goods />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
            <Footer />
        </BrowserRouter >
    );
}

export default App;