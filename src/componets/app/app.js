import { BrowserRouter, Routes, Route } from "react-router-dom";

import { arr as data } from "../../products";


import CoffeePage from "../containers/coffee/coffe-page";
import HomePage from "../containers/home/home-page";

import './app.scss';


function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage data={data} />} />
                <Route path="/coffee" element={<CoffeePage data={data}/>} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;