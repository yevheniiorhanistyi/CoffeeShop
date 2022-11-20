import { arr as data } from "../../products";

import HomePage from "../containers/home/home-page";

function App() {
    return (
        <div className="App">
            <HomePage data={data} />
        </div>
    );
}

export default App;