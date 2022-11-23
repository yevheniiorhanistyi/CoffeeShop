import { Component, Fragment } from 'react';

import Nav from '../../nav/nav';
import CoffeeBeans from '../../coffee-beans/coffee-beans';
import AboutGroupe from '../../about-groupe/about-groupe';
import CardList from '../../card-list/card-list';
import Footer from '../../footer/footer';


import './home-page.scss';

class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: this.props
        }


        // this.setState(({ data }) => {
        //     return {
        //         data: data.filter(item => item.recommended === true)
        //     }
        // })
    }


    titleAbout = 'About Us';

    p1 = `Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.
          Afraid at highly months do things on at. Situation recommend objection do intention
          so questions. As greatly removed calling pleased improve an. Last ask him cold feel
          met spot shy want. Children me laughing we prospect answered followed. At it went
          is song that held help face.`;

    p2 = `Now residence dashwoods she excellent you. Shade being under his bed her, Much
          read on as draw. Blessing for ignorant exercise any yourself unpacked. Pleasant
          horrible but confined day end marriage. Eagerness furniture set preserved far
          recommend. Did even but nor are most gave hope. Secure active living depend son
          repair day ladies now.`;

    render() {

        const { data } = this.state;

        return (
            <Fragment>
                <div className="main">
                    <div className="container text-center">
                        <div className="row">
                            <div className="col">
                                <Nav data='header' />
                                <h1 className='main-title'>Everything You Love About Coffee</h1>
                                <CoffeeBeans color='white' />
                                <h2 className='main-subtitle'>We makes every day full of energy and taste</h2>
                                <h2 className='main-subtitle'>Want to try our beans?</h2>
                                <button type="button" className="btn btn-outline-light">More</button>
                            </div>
                        </div>
                    </div>
                </div>

                <AboutGroupe title={this.titleAbout} p1={this.p1} p2={this.p2} />

                {/* <div className="recommended">
                    <div className="container text-center">
                        <div className="row">
                            <div className="col">
                                <h2 className="recommended-title">Our best</h2>
                                <div className="recommended-items">
                                    <CardList data={data} />
                                </div>

                            </div>
                        </div>
                    </div>
                </div> */}

                <Footer />
            </Fragment>
        );
    }

}


export default HomePage;