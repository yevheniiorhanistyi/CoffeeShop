import { useSelector, useDispatch} from 'react-redux';
import { selectFilter } from '../../redux/filter/selectors';
import { setSearchValue, setCurrentFilter } from '../../redux/filter/slice';

import './cardListFilters.scss';

const CardListFilters = () => {
    const disatch = useDispatch();
    const { searchValue, currentFilter } = useSelector(selectFilter);

    const onChangeInput = (e) => {
        disatch(setSearchValue(e.target.value));
    };

    const onFilterSelect = (name) => {
        disatch(currentFilter(name));
    };

        const buttonsData = [
            { name: 'Brazil', label: 'Brazil' },
            { name: 'Kenya', label: 'Kenya' },
            { name: 'Columbia', label: 'Columbia' }
        ];

        const buttons = buttonsData.map(({ name, label }) => {
            const active = filter === name;
            const clazz = active ? 'active' : "";
            return (
                <button
                    type="button"
                    className={`btn btn-light filter-btn ${clazz}`}
                    key={name}
                    onClick={() => onFilterSelect(name)}>
                    {label}
                </button>
            )
        })

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
                                value={searchValue}
                                onChange={onChangeInput} />
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

export default CardListFilters;