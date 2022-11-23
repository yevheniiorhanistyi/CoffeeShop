import CoffeeBeans from "../coffee-beans/coffee-beans";

import './about-groupe.scss';


const AboutGroupe = ({ title, src, p1, p2, isOpen, country, price }) => {

    return (
        <div className='about'>
            {!isOpen
                ?
                < div className="container text-center" >
                    <div className="d-flex row align-items-center justify-content-center flex-wrap">
                        {src && <div className="col-sm-5">
                            <img className="about-image" src={src} alt='coffee beans' />
                        </div>
                        }
                        <div className={src ? 'col-sm-4' : 'col'}>
                            <h2 className="about-title">{title}</h2>
                            <CoffeeBeans color="black" />
                            <p className="about-text">{p1}</p>
                            <p className="about-text">{p2}</p>
                        </div>

                    </div>
                </div >
                :
                < div className="container" >
                    <div className="d-flex row align-items-center justify-content-center flex-wrap">
                        <div className="col-sm-5">
                            <img className="about-image" src={src} alt='coffee beans' />
                        </div>
                        <div className='col-sm-4'>
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