import Nav from '../../nav/nav';
import CoffeeBeans from '../../coffee-beans/coffee-beans';
import Card from '../../card/card';
import Footer from '../../footer/footer';

import './coffe-page.scss';

const CoffeePage = ({data}) => {

    return(
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
            <div className='about-groupe'>
                <div className="container text-center">
                        <div className="row align-items-center justify-content-center">
                            <div className="col-sm-4">
                                <img src='./img/component-items/photo_1.png' alt='coffee beans'/>
                            </div>
                            <div className="col-sm-4">
                                <h2 className="about-title">About our beans</h2>
                                <CoffeeBeans color="black" />
                                <p className="about-text">Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.</p>

                                <p className="about-text">Afraid at highly months do things on at. Situation recommend objection do intention
                                so questions. 
                                As greatly removed calling pleased improve an. Last ask him cold feel
                                met spot shy want. Children me laughing we prospect answered followed. At it went is song that held help face.</p>
                            </div>
                        </div>
                </div>
            </div>
            <div className="container text-center">
                <div className="row align-items-center justify-content-center">
                     <div className='col-sm-6 search'>
                         <label className='search-label' htmlFor='search-input'>Lookiing for</label>
                         <input className='search-input' type="text" placeholder='start typing here...' id='search-input'/>
                    </div>
                    <div className='col-sm-5 filter-group'>
                         <label className='filter-label' htmlFor='filter-button'>Or filter</label>
                         <button type="button" class="btn btn-light filter-btn" id='filter-button'>Brazil</button>
                         <button type="button" class="btn btn-light filter-btn">Kenya</button>
                         <button type="button" class="btn btn-light filter-btn">Columbia</button>
                    </div>
                </div>
            </div>
            <div className="container text-center">
                <div className="row align-items-center justify-content-center">
                    <div className="col-sm-9">
                        <div className="d-flex flex-wrap justify-content-center wrapper">
                                {data.map((item) =>
                                    !item.recommended && <Card key={item.id} data={item} />)
                                }
                        </div>

                    </div>
                </div>
            </div>
            <Footer/>
        </>
    );
}

export default CoffeePage;