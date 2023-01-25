import { LazyLoadImage } from "react-lazy-load-image-component";
import { useSelector } from 'react-redux';
import { selectArticles } from '../../redux/articles/selectors';

import { Nav, CardList, CoffeeBeans } from '../../componets';
import Image from '../../resources/images/cup.png';

import 'react-lazy-load-image-component/src/effects/blur.css';
import './Goods.scss';

const Gooods = () => {
    const { articles } = useSelector(selectArticles);

    window.scrollTo(0, 0);

    return (
        <>
            <div className='goods-page__inner'>
                <div className="container text-center">
                    <div className="row">
                        <div className="col">
                            <Nav />
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
                                        <span className="about-image">
                                            <LazyLoadImage style={{ 'width': '272px', 'height': '355px' }} src={Image} alt='coffee beans' effect="blur" />
                                        </span>
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
                        <CardList data={articles} />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Gooods;