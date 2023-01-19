import Nav from '../nav';
import CoffeeBeans from '../coffeeBeans';

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