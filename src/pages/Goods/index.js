import Nav from '../../componets/nav';
import CardList from '../../componets/cardList';
import CoffeeBeans from '../../componets/coffeeBeans';

import './goods.scss';

const GooodsPage = ({ data }) => {

    return (
        <>
            <div className='goods-page__inner'>
                <div className="container text-center">
                    <div className="row">
                        <div className="col">
                            <Nav data='header' />
                            <h1 className='goods-page__title'>For your pleasure</h1>
                        </div>
                    </div>
                </div>
            </div>

            <div className='about'>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-12 col-sm-12 col-md-12 col-lg-8">
                            <div className="container text-center" >
                                <div className="row align-items-center">
                                    <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                                        <img className="about-image" src='./img/component-items/cup.png' alt='coffee beans' />
                                    </div>
                                    <div className='col col-10 col-sm-8 col-md-6 col-lg-6 about-content'>
                                        <h2 className="about-title">About our goods</h2>
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
                    <div className="col-sm-10">
                        <CardList data={data} />
                    </div>
                </div>
            </div>
        </>
    );
}

export default GooodsPage;