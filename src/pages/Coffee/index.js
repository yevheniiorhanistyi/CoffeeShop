import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectItems } from '../../redux/articles/selectors';

import Nav from '../../componets/nav';
import CoffeeBeans from '../../componets/coffeeBeans';
import CardListFilters from '../../componets/cardListFilters';
import CardList from '../../componets/cardList';
import AboutItem from '../../componets/aboutItem';

import './coffee.scss';

const Coffee = ({ onUpdateSearch, filter, onFilterSelect}) => {
    const { selectedArticles } = useSelector(selectArticles);
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
    
        return (
            <>
                <div className='coffee-page__inner'>
                    <div className="container text-center">
                        <div className="row">
                            <div className="col">
                                <Nav data='header' />
                                <h1 className='coffee-page__title'>Our Coffee</h1>
                            </div>
                        </div>
                    </div>
                </div>
                { open
                ? <AboutItem country={country} price={price} setOpen={setOpen}/> 
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
                                <CardList data={selectedArticles} onOpenDescription={onOpenDescription}/>
                            </div>
                        </div>
                </div>
                </>
                }
            </>
        );
}

export default Coffee;