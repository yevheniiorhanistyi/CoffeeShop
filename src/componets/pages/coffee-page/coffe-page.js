import { Component } from 'react';

import Nav from '../../nav/nav';
import AboutGroupe from '../../about-groupe/about-groupe';
import CardListFilters from '../../card-list-filters/card-list-filters';
import CardList from '../../card-list/card-list';
import Footer from '../../footer/footer';

import './coffe-page.scss';

class CoffeePage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isOpen: false,
            term: ''
        }
    }

    imgSrc = './img/component-items/photo_1.png';
    titleAbout = 'About our beans';

    p1 = `Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.`;

    p2 = `Afraid at highly months do things on at. Situation recommend objection do intention
          so questions. 
          As greatly removed calling pleased improve an. Last ask him cold feel
          met spot shy want. Children me laughing we prospect answered followed. At it went
          is song that held help face.`;

    country = '';
    price = '';

    onOpenDescription = (id) => {
        const { data } = this.props;
        data.forEach(item => {
            if (item.id === id) {
                this.country = item.country;
                this.price = item.price;
                this.imgSrc = './img/component-items/photo_2.jpg';
            }
        })
        this.setState({ isOpen: true })
    }



    render() {

        const { isOpen } = this.state;
        const { data, onUpdateSearch, filter, onFilterSelect } = this.props;

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
                        <div className="container text-center">
                            <div className="row align-items-center justify-content-center">
                                <div className="col-sm-10">
                                    <CardListFilters
                                        onUpdateSearch={onUpdateSearch}
                                        filter={filter}
                                        onFilterSelect={onFilterSelect} />
                                    <CardList data={data} onOpenDescription={this.onOpenDescription} />
                                </div>
                            </div>
                        </div>
                    </> :
                    <AboutGroupe isOpen={isOpen} src={this.imgSrc} country={this.country} price={this.price} />
                }


                <Footer />
            </>
        );
    }

}

export default CoffeePage;