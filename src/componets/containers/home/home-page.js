import { Fragment } from 'react';

import Main from '../../main/main';
import About from '../../about/about';
import Recommended from '../../recommended/recommended';
import Footer from '../../footer/footer';


import './home-page.scss';

const HomePage = ({ data }) => {

    return (
        <Fragment>
            <Main />
            <About />
            <Recommended data={data} />
            <Footer/>
        </Fragment>
    );
}


export default HomePage;