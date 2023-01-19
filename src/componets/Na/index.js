import { Link } from 'react-router-dom';
import * as bootstrap from "bootstrap/js/dist/collapse"; // eslint-disable-line

import './Nav.scss';

export const Nav = (props) => {
    const imgSrc = props.color === 'black' ? '/img/component-items/coffee-beans-footer.png' : '/img/component-items/coffee-beans-header.png';

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