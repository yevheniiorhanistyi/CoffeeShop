import { Link } from 'react-router-dom';
import * as bootstrap from "../../../node_modules/bootstrap/js/dist/collapse";

import './nav.scss';

const Nav = (props) => {
    const isHeader = props.data === 'header';
    const clazz = isHeader ? "navbar navbar-dark navbar-expand-lg" : "navbar navbar-light navbar-expand-lg";
    const imgSrc = isHeader ? '/img/component-items/coffee-beans-header.png' : '/img/component-items/coffee-beans-footer.png'

    return (
        <nav className={clazz}>
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
}

export default Nav;