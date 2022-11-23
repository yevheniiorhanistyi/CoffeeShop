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

        const { term } = this.state;

        return (
            <div className="container text-center mb-30" >
                <div className="row align-items-center justify-content-center">
                    <div className='col-sm-6 search'>
                        <div className="d-flex justify-content-center align-items-center">
                            <label className='search-label' htmlFor='search-input'>Lookiing for</label>
                            <input
                                className='search-input'
                                type="text"
                                placeholder='start typing here...'
                                id='search-input'
                                value={term}
                                onChange={this.onUpdateSearch} />
                        </div>
                    </div>

                    <div className='col-sm-5 filter-group'>
                        <label className='filter-label' htmlFor='filter-button'>Or filter</label>
                        <button type="button" className="btn btn-light filter-btn" id='filter-button'>Brazil</button>
                        <button type="button" className="btn btn-light filter-btn">Kenya</button>
                        <button type="button" className="btn btn-light filter-btn">Columbia</button>
                    </div>

                </div>
            </div>
        )
    }

}

export default CardListFilters;