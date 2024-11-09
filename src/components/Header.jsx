const Header = () => {
    return (
        <header>
            <div>
                <h1>
                    <a href="#" id="site-logo">
                        Trivia
                    </a>
                </h1>
            </div>
            <nav className="nav">
                <a href="#" className="nav-link">
                    Home
                </a>
                <a href="#" className="nav-link">
                    About Us
                </a>
            </nav>
        </header>
    );
};

export default Header;