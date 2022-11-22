import Nav from '../../nav/nav';
import AboutGroupe from '../../about-groupe/about-groupe';
import Card from '../../card/card';
import Footer from '../../footer/footer';

import './goods-page.scss';

const GooodsPage = ({data}) => {

    const titleAbout = 'About our goods',
          imgSrc = './img/component-items/cup.png',
          p1 = `Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.`,

          p2 = `Afraid at highly months do things on at. Situation recommend objection do intention
          so questions. 
          As greatly removed calling pleased improve an. Last ask him cold feel
          met spot shy want. Children me laughing we prospect answered followed. At it went
          is song that held help face.`

    return(
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
            
            <AboutGroupe title={titleAbout} src={imgSrc} p1={p1} p2={p2}/>

            <div className="container text-center">
                <div className="row align-items-center justify-content-center">
                    <div className="col-sm-10">
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

export default GooodsPage;