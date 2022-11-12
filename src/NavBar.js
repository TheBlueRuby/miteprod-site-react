import { Link } from "react-router-dom";

import "./NavBar.css";

function NavBar() {
    return (
        <div className="navbar">
            <div className="navbar-container">
                <ul className="navbar-list">

                    <li className="navbar-item">
                        <Link to="/" className="navbar-link">
                            Homepage
                        </Link>
                    </li>

					<li className="navbar-item">
                        <Link to="/games" className="navbar-link">
                            Games
                        </Link>
                    </li>
					
					<li className="navbar-item">
                        <Link to="/about" className="navbar-link">
                            About
                        </Link>
                    </li>
					
                </ul>
            </div>
        </div>
    );
}

export default NavBar;
