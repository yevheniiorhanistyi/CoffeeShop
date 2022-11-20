import Nav from "../nav/nav"
import CoffeeBeans from "../coffee-beans/coffee-beans"

import './main.scss';

const Main = () => {

    return (
        <div className="main">
            <div className="container text-center">
                <div className="row">
                    <div className="col">
                        <Nav data='header' />
                        <h1 className='main-title'>Everything You Love About Coffee</h1>
                        <CoffeeBeans color='white' />
                        <h2 className='main-subtitle'>We makes every day full of energy and taste</h2>
                        <h2 className='main-subtitle'>Want to try our beans?</h2>
                        <button type="button" className="btn btn-outline-light">More</button>
                    </div>
                </div>
            </div>
        </div>
    );

}

export default Main;