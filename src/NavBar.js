import "./NavBar.css";

function NavBar() {
    return (
        <div className="navbar">
            <div className="navbar-container">
                <ul className="navbar-list">
                    <li className="navbar-item">
                        <a href="/" className="navbar-link">
                            Homepage
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default NavBar;
