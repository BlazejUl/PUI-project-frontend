import { Link } from 'react-router'
import './header.css'

export function Header({ isLoginOpen, setIsLoginOpen, loggedIn, setloggedIn }) {
    return (
        <div className="header">
            <div className="left-section">
                <Link to="/" className="header-link">
                    <img className="logo"
                        src="images/logo-white.png" />
                    <img className="mobile-logo"
                        src="images/mobile-logo-white.png" />
                </Link>
            </div>

            <div className="middle-section">



            </div>

            <div className="right-section">
                <Link className="search-link header-link" to="/">
                    <span className="search-text">Search</span>
                </Link>
                <Link className="favorites-link header-link"
                    to="/favorites"
                    onClick={(e) => {
                        if (!loggedIn) {
                            e.preventDefault();
                            setIsLoginOpen(true);
                        }
                    }}>

                    <span className="orders-text">Favorites</span>
                </Link>

                <Link
                    className="profile-link header-link"
                    to="/profile"
                    onClick={(e) => {
                        if (!loggedIn) {
                            e.preventDefault();
                            setIsLoginOpen(true);
                        }
                    }}>
                    <img className="profile-icon" src="images/user.png" />

                </Link>
            </div>
            {isLoginOpen && (
                <div className="modal-overlay">
                    <div className="modal-box">
                        <h2>Logowanie</h2>
                        <input type="text" placeholder="Email" className="modal-input" />
                        <input type="password" placeholder="Hasło" className="modal-input" />

                        <div className="modal-actions">
                            <button className="btn-submit" onClick={() => { setloggedIn(true); setIsLoginOpen(false) }}>Zaloguj</button>

                            <button className="btn-close" onClick={() => setIsLoginOpen(false)}>
                                Anuluj
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}