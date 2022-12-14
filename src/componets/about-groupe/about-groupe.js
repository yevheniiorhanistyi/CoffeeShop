import CoffeeBeans from "../coffee-beans/coffee-beans";

import './about-groupe.scss';


const AboutGroupe = ({ title, src, p1, p2, isOpen, country, price }) => {

    return (
        <div className='about'>
            {!isOpen
                ?
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-12 col-sm-12 col-md-12 col-lg-8">
                            <div className="container text-center" >
                                <div className="row align-items-center">
                                    {src &&
                                        <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                                            <img className="about-image" src={src} alt='coffee beans' />
                                        </div>
                                    }
                                    <div className={src ? 'col col-10 col-sm-8 col-md-6 col-lg-6 about-content' : 'col'}>
                                        <h2 className="about-title">{title}</h2>
                                        <CoffeeBeans color="black" />
                                        <p className="about-text">{p1}</p>
                                        <p className="about-text">{p2}</p>
                                    </div>
                                </div>
                            </div >
                        </div>
                    </div>
                </div>
                :
                <div className="container" >
                    <div className="row align-items-center justify-content-center">

                        <div className="col-10 col-sm-8 col-md-6 col-lg-5">
                            <img className="about-image" src={src} alt='coffee beans' />
                        </div>

                        <div className='col-10 col-sm-8 col-md-6 col-lg-5'>
                            <h2 className="about-title  text-center">About it</h2>
                            <CoffeeBeans color="black" />
                            <div className="text-left">
                                <p className="about-country"><b>Country:</b>{country}</p>
                                <p className="about-text text-description"><b>Description:</b>Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                <p className="about-price"><b>Price:</b><span>{price}</span></p>
                            </div>

                        </div>
                    </div>
                </div>
            }

        </div >
    )



}

export default AboutGroupe;