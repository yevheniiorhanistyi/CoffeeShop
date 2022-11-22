import { BrowserRouter, Routes, Route } from "react-router-dom";

import { arr as data } from "../../products";


import HomePage from "../containers/home/home-page";
import CoffeePage from "../containers/coffee/coffe-page";
import GooodsPage from "../containers/goods/goods-page";

import './app.scss';


function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage data={data} />} />
                <Route path="/coffee" element={<CoffeePage data={data}/>} />
                <Route path="/goods" element={<GooodsPage data={data}/>} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;