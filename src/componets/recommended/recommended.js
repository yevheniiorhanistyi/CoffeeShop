import Card from '../card/card';

import './recommended.scss';

const Recommended = ({ data }) => {

    return (
        <div className="recommended">
            <div className="container text-center">
                <div className="row">
                    <div className="col">
                        <h2 className="recommended-title">Our best</h2>
                        <div className="recommended-items">
                            {data.map((item, index) =>
                                item.recommended && <Card key={index} data={item} />)
                            }
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Recommended;