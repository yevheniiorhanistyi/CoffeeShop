import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { data } from "../../resources/data";

import Home from "../../pages/Home";
import Coffee from "../../pages/Coffee";
import Goods from "../../pages/Goods";


const App = () =>  {
    const [term, setTerm] = useState(''); 
    const [filter, setFilter] = useState(''); 

    const searchItems = (items, term) => {
        if (term.length === 0) {
            return items;
        };

        return items.filter(item => {
            return item.name.toLowerCase().includes(term);
        });
    };

    const onUpdateSearch = (term) => {
        setTerm(() => term);
    }

    const filterPost = (items, filter) => {
        switch (filter) {
            case 'Brazil':
                return items.filter(item => item.country === 'Brazil');
            case 'Kenya':
                return items.filter(item => item.country === 'Kenya');
            case 'Columbia':
                return items.filter(item => item.country === 'Columbia');
            default:
                return items;
        }
    }

    const onFilterSelect = (props) => {
        props === filter ? setFilter('') : setFilter(props);
    };

        const onlyRecommItems = data.filter(item => item.recommended === true);
        const visibleData = filterPost(searchItems(data, term), filter);

        return (
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home data={onlyRecommItems} />} />
                    <Route path="/coffee" element={
                        <Coffee
                            data={visibleData}
                            onUpdateSearch={onUpdateSearch}
                            filter={filter}
                            onFilterSelect={onFilterSelect} />} />
                    <Route path="/goods" element={<Goods data={data} />} />
                </Routes>
            </BrowserRouter >
        );
    }

export default App;