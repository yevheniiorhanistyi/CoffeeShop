import Nav from '../../nav/nav';
import AboutGroupe from '../../about-groupe/about-groupe';
import Card from '../../card/card';
import Footer from '../../footer/footer';

import './goods-page.scss';

const GooodsPage = ({data}) => {

    const titleAbout = 'About our goods',
          imgSrc = './img/component-items/cup.png';

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
            
            <AboutGroupe title={titleAbout} src={imgSrc}/>

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

export default GooodsPage;