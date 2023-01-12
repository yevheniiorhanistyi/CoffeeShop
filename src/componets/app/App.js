import { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { goods } from "../../resources/goods";


import Home from "../../pages/Home";
import Coffee from "../../pages/Coffee";
import Gooods from "../../pages/Goods";


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: goods,
            term: '',
            filter: ''
        }
    }

    searchItems = (items, term) => {
        if (term.length === 0) {
            return items;
        }

        return items.filter(item => {
            return item.name.toLowerCase().includes(term)
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
        filter === this.state.filter ? this.setState({ filter: '' }) : this.setState({ filter });
    }

    render() {

        const { data, term, filter } = this.state;
        const onlyRecommItems = data.filter(item => item.recommended === true);
        const visibleData = this.filterPost(this.searchItems(data, term), filter);

        return (
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home data={onlyRecommItems} />} />
                    <Route path="/coffee" element={
                        <Coffee
                            data={visibleData}
                            onUpdateSearch={this.onUpdateSearch}
                            filter={filter}
                            onFilterSelect={this.onFilterSelect} />} />
                    <Route path="/goods" element={<Gooods data={data} />} />
                </Routes>
            </BrowserRouter >
        );
    }

}

export default App;