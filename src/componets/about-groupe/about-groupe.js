import CoffeeBeans from "../coffee-beans/coffee-beans";

import './about-groupe.scss';


const AboutGroupe = ({title, src, p1, p2}) => {

    return(
        <div className='about-groupe'>
                <div className="container text-center">
                        <div className="d-flex row align-items-center justify-content-center flex-wrap">
                            {src && <div className="col-sm-5">
                                        <img className="about-image" src={src} alt='coffee beans'/>
                                    </div>
                            }
                            <div className={src ? 'col-sm-4' : 'col'}>
                                <h2 className="about-title">{title}</h2>
                                <CoffeeBeans color="black" />
                                <p className="coffee-card__country">{'Country: Brasil'}</p>
                                <p>{p1}</p>
                                <p className="coffee-card__price">{'Price:  16.99$'}</p>
                                <p>{p2}</p>
                            </div>
                        </div>
                </div>
            </div>
    );
}

export default AboutGroupe;