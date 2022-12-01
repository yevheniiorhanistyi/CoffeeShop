import { Component } from 'react';

import './card-list-filters.scss';

class CardListFilters extends Component {
    constructor(props) {
        super(props);

        this.state = {
            term: ''
        }
    }

    onUpdateSearch = (e) => {
        const term = e.target.value.toLowerCase();
        this.setState({ term });
        this.props.onUpdateSearch(term);
    }

    render() {

        const buttonsData = [
            { name: 'Brazil', label: 'Brazil' },
            { name: 'Kenya', label: 'Kenya' },
            { name: 'Columbia', label: 'Columbia' }
        ];

        const buttons = buttonsData.map(({ name, label }) => {
            const active = this.props.filter === name;
            const clazz = active ? 'active' : "";
            return (
                <button
                    type="button"
                    className={`btn btn-light filter-btn ${clazz}`}
                    key={name}
                    onClick={() => this.props.onFilterSelect(name)}>
                    {label}
                </button>
            )
        })

        const { term } = this.state;

        return (
            <div className="container text-center filters" >
                <div className="row align-items-center justify-content-center">
                    <div className='col-12 col-sm-12 col-md-6 col-lg-6 search'>
                        <div className="d-flex justify-content-center align-items-center search-group">
                            <label className='search-label' htmlFor='search-input'>Lookiing for</label>
                            <input
                                className='form-control search-input'
                                type="text"
                                placeholder='start typing here...'
                                id='search-input'
                                value={term}
                                onChange={this.onUpdateSearch} />
                        </div>
                    </div>

                    <div className='col-12 col-sm-12 col-md-7 col-lg-6 filter-group'>
                        <label className='filter-label' htmlFor='filter-button'>Or filter</label>
                        {buttons}
                    </div>

                </div>
            </div>
        )
    }

}

export default CardListFilters;