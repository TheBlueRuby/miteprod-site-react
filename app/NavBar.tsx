import Link from "next/link";

function NavBar() {
    return (
        <div className="navbar">
            <div className="navbar-container">
                <ul className="navbar-list">

                    <li className="navbar-item">
                        <Link href="/" className="navbar-link" style={{padding: 0}}>
                            <img
                                src="/logo1k.png"
                                width={48}
                                height={48}
                                className="navbar-icon"
                            />
                        </Link>
                    </li>

                    <li className="navbar-item">
                        <Link href="/" className="navbar-link">
                            Homepage
                        </Link>
                    </li>

                    <li className="navbar-item">
                        <Link href="/games" className="navbar-link">
                            Games
                        </Link>
                    </li>

                    <li className="navbar-item">
                        <Link href="/about" className="navbar-link">
                            About
                        </Link>
                    </li>

					<li className="navbar-item">
                        <Link href="https://github.com/TheBlueRuby/miteprod-site-react/" className="navbar-link" target="_blank" rel="noreferrer">
                            Source
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default NavBar;
