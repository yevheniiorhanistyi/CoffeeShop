import CoffeeBeans from "../coffee-beans/coffee-beans";

import './about-groupe.scss';


const AboutGroupe = ({title, src}) => {

    return(
        <div className='about-groupe'>
                <div className="container text-center">
                        <div className="row align-items-center justify-content-center">
                            <div className="col-sm-4">
                                <img src={src} alt='coffee beans'/>
                            </div>
                            <div className="col-sm-4">
                                <h2 className="about-title">{title}</h2>
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
    );
}

export default AboutGroupe;