import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { setSelectedArticles } from '../../redux/articles/slice';
import { selectArticles } from '../../redux/articles/selectors';
import { selectFilter } from '../../redux/filter/selectors';

import { Nav, CoffeeBeans, CardListFilters, CardList, AboutItem } from '../../componets';

import './Coffee.scss';

const Coffee = () => {
    const dispatch = useDispatch();
    const { searchValue, currentFilter } = useSelector(selectFilter);
    const { articles, selectedArticles } = useSelector(selectArticles);
    const [open, setOpen] = useState(false);
    const [country, setCountry] = useState('');
    const [price, setPrice] = useState(null);

    const onOpenDescription = (id) => {
        selectedArticles.forEach(item => {
            if (item.id === Number(id)) {
                setCountry(item.country);
                setPrice(item.price);
            }
        });
        setOpen(!open);
    }

    useEffect(() => {

        const searchItems = (items, term) => {
            if (term.length === 0) {
                return items;
            };

            return items.filter(item => {
                return item.name.toLowerCase().includes(term);
            });
        };

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

        const visibleItems = filterPost(searchItems(articles, searchValue), currentFilter);
        dispatch(setSelectedArticles(visibleItems));

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [searchValue, currentFilter]);

    return (
        <>
            <div className='coffee-page__inner'>
                <div className="container text-center">
                    <div className="row">
                        <div className="col">
                            <Nav />
                            <h1 className='coffee-page__title'>Our Coffee</h1>
                        </div>
                    </div>
                </div>
            </div>
            {open
                ? <AboutItem country={country} price={price} setOpen={setOpen} />
                : <><div className='about'>
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-12 col-sm-12 col-md-12 col-lg-8">
                                <div className="container text-center" >
                                    <div className="row align-items-center">
                                        <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                                            <img className="about-image" src='./img/component-items/girl.jpg' alt='coffee beans' />
                                        </div>
                                        <div className='col col-10 col-sm-8 col-md-6 col-lg-6 about-content'>
                                            <h2 className="about-title">About our beans</h2>
                                            <CoffeeBeans color="black" />
                                            <p className="about-text">
                                                Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.
                                            </p>
                                            <p className="about-text">
                                                Afraid at highly months do things on at. Situation recommend objection do intention so questions. As greatly removed calling pleased improve an. Last ask him cold feel met spot shy want. Children me laughing we prospect answered followed. At it went is song that held help face.
                                            </p>
                                        </div>
                                    </div>
                                </div >
                            </div>
                        </div>
                    </div>
                </div>

                    <div className="container text-center">
                        <div className="row align-items-center justify-content-center">
                            <div className="col-sm-12 col-lg-10">
                                <CardListFilters />
                                <CardList data={selectedArticles} />
                            </div>
                        </div>
                    </div>
                </>
            }
        </>
    );
}

export default Coffee;