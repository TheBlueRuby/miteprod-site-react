import "./App.css";

import { Route, Routes } from "react-router-dom";

import Homepage from "./Homepage";
import About from "./About";
import Games from "./games/Games";
import Globals from "./Globals";
import Err404 from "./Errors"

function App() {
    return (
        <div>
            <Globals />
            <div className="page-content">
                <Routes>
                    <Route exact path="/" element={<Homepage />} />
                    <Route exact path="/about" element={<About />} />
                    <Route exact path="/games" element={<Games />} />
					<Route path="*" element={<Err404 />} />
                </Routes>
            </div>
        </div>
    );
}

export default App;
