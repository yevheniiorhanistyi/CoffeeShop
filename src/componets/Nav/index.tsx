import { Link } from 'react-router-dom';

import BeansFooter from '../../resources/images/coffee-beans-footer.png'; 
import BeansHeader from '../../resources/images/coffee-beans-header.png'; 

import './Nav.scss';

export const Nav: React.FC = ({color}: any) => {
    const imgSrc = color === 'black' ? BeansFooter : BeansHeader;

    return (
        <nav className="navbar navbar-light navbar-expand-lg">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">
                    <img src={imgSrc} alt="Coffe beans" />
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link" aria-current="page" to="/">Coffee house</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/coffee">Our coffee</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/goods">For your pleasure</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};