import { Component } from 'react';

import Nav from '../../nav/nav';
import AboutGroupe from '../../about-groupe/about-groupe';
import CardList from '../../card-list/card-list';
import Footer from '../../footer/footer';

import './coffe-page.scss';

class CoffeePage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isOpen: false
        }
    }

    titleAbout = 'About our beans';
    imgSrc = './img/component-items/photo_1.png';
    p1 = `Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.`;

    p2 = `Afraid at highly months do things on at. Situation recommend objection do intention
          so questions. 
          As greatly removed calling pleased improve an. Last ask him cold feel
          met spot shy want. Children me laughing we prospect answered followed. At it went
          is song that held help face.`;

    onOpenDescription = (e) => {
        console.log('open');
    }

    render() {

        const { data } = this.props;
        const { isOpen } = this.state;

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
                {!isOpen ?
                    <>
                        <AboutGroupe title={this.titleAbout} src={this.imgSrc} p1={this.p1} p2={this.p2} />
                        <div className="container text-center mb-30">
                            <div className="row align-items-center justify-content-center">
                                <div className='col-sm-6 search'>
                                    <label className='search-label' htmlFor='search-input'>Lookiing for</label>
                                    <input className='search-input' type="text" placeholder='start typing here...' id='search-input' />
                                </div>
                                <div className='col-sm-5 filter-group'>
                                    <label className='filter-label' htmlFor='filter-button'>Or filter</label>
                                    <button type="button" className="btn btn-light filter-btn" id='filter-button'>Brazil</button>
                                    <button type="button" className="btn btn-light filter-btn">Kenya</button>
                                    <button type="button" className="btn btn-light filter-btn">Columbia</button>
                                </div>
                            </div>
                        </div>
                        <div className="container text-center">
                            <div className="row align-items-center justify-content-center">
                                <div className="col-sm-10">
                                    <CardList data={data}/>
                                </div>
                            </div>
                        </div>
                    </> :
                    <AboutGroupe isOpen={isOpen} src={this.imgSrc} />
                }


                <Footer />
            </>
        );
    }

}

export default CoffeePage;