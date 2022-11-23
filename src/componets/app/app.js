import { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { arr } from "../../products";


import HomePage from "../pages/home/home-page";
import CoffeePage from "../pages/coffee/coffe-page";
import GooodsPage from "../pages/goods/goods-page";

import './app.scss';


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: arr,
            term: '',
            filter: 'all'
        }
    }

    searchItems = (items, term) => {
        if (term.length === 0) {
            return items;
        }

        return items.filter(item => {
            return item.name.indexOf(term) > -1
        })
    }

    onUpdateSearch = (term) => {
        this.setState({ term })
    }

    filterPost = (items, filter) => {
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

    onFilterSelect = (filter) => {
        this.setState({ filter });
    }

    render() {

        const { data, term, filter } = this.state;
        const onlyRecommItems = data.filter(item => item.recommended === true);
        const visibleData = this.filterPost(this.searchItems(data, term), filter);

        return (
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<HomePage data={onlyRecommItems} />} />
                    <Route path="/coffee" element={
                        <CoffeePage
                            data={visibleData}
                            onUpdateSearch={this.onUpdateSearch}
                            filter={filter}
                            onFilterSelect={this.onFilterSelect} />} />
                    <Route path="/goods" element={<GooodsPage data={data} />} />
                </Routes>
            </BrowserRouter >
        );
    }

}

export default App;