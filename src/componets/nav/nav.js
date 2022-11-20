import './nav.scss';

const Nav = (props) => {
    const isHeader = props.data === 'header';
    const clazz = isHeader ? "navbar navbar-dark navbar-expand-lg" : "navbar navbar-light navbar-expand-lg";
    const imgSrc = isHeader ? '/img/component-items/coffee-beans-header.png' : '/img/component-items/coffee-beans-footer.png'

    return (
        <nav className={clazz}>
            <div className="container-fluid">
                <a className="navbar-brand" href="http://localhost:3000/">
                    <img src={imgSrc} alt="Coffe beans" />
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link" aria-current="page" href="http://localhost:3000/">Coffee house</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="http://localhost:3000/">Our coffee</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="http://localhost:3000/">For your pleasure</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Nav;