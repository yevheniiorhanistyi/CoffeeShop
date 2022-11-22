import CoffeeBeans from "../coffee-beans/coffee-beans";

import './about-groupe.scss';


const AboutGroupe = ({title, src, p1, p2}) => {

    const x = `Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`;

    return(
        <div className='about'>
                <div className="container text-center">
                        <div className="d-flex row align-items-center justify-content-center flex-wrap">
                            {src && <div className="col-sm-5">
                                        <img className="about-image" src={src} alt='coffee beans'/>
                                    </div>
                            }
                            <div className={src ? 'col-sm-4' : 'col'}>
                                <h2 className="about-title">{title}</h2>
                                <CoffeeBeans color="black" />
                                <p className="country">Country:{'Brasil'}</p>
                                <p className="about-text">{x}</p>
                                <p className="price">Price:{'16.99$'}</p>
                                <p className="about-text">{}</p>
                            </div>
                        </div>
                </div>
            </div>
    );
}

export default AboutGroupe;