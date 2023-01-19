import { CoffeeBeans } from '../';

import './About.scss';


export const AboutItem = ({ price, country, setOpen }) => {

    return (

        <div className='about'>
            <div className="container" >
                <button onClick={() => setOpen(false)} className="btn btn-outline-light btn-back"><span>&#10094;</span> Back</button>
                <div className="row align-items-center justify-content-center">

                    <div className="col-10 col-sm-8 col-md-6 col-lg-5">
                        <img className="about-image" src='/img/component-items/photo_2.jpg' alt='coffee beans' />
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
        </div >
    )
};