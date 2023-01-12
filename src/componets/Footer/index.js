import Nav from '../nav/nav';
import CoffeeBeans from '../coffee-beans/coffee-beans';

import './footer.scss';

const Footer = () => {
    return (
        <div className='footer'>
            <Nav />
            <CoffeeBeans color='black' />
        </div>

    );
}

export default Footer;