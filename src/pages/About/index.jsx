import { Link, useParams } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import { Nav, CoffeeBeans } from '../../componets';

import img from '../../resources/images/photo_2.jpg'
import 'react-lazy-load-image-component/src/effects/blur.css';

const About = () => {
    const { country, price } = useParams();

    return (
        <>
            <div className='coffee-page__inner'>
                <div className="container text-center">
                    <div className="row">
                        <div className="col">
                            <Nav />
                            <h1 className='coffee-page__title'>Our Coffee</h1>
                        </div>
                    </div>
                </div>
            </div>
            <div className='about'>
                <div className="container" >
                    <Link to={'/coffee'} className="btn btn-outline-light btn-back"><span>&#10094;</span> Back</Link>
                    <div className="row align-items-center justify-content-center">

                        <div className="col-10 col-sm-8 col-md-6 col-lg-5">
                            <span className="about-image">
                                <LazyLoadImage width={'100%'} src={img} alt='coffee beans' effect='blur' />
                            </span>
                        </div>

                        <div className='col-10 col-sm-8 col-md-6 col-lg-5'>
                            <h2 className="about-title  text-center">About it</h2>
                            <CoffeeBeans color="black" />
                            <div className="text-left">
                                <p className="about-country"><b>Country:</b>{country}</p>
                                <p className="about-text text-description"><b>Description:</b>Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                <p className="about-price"><b>Price:</b><span>{price}$</span></p>
                            </div>

                        </div>
                    </div>
                </div>
            </div >
        </>
    )
};

export default About;