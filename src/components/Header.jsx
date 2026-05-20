import { Link } from 'react-router'
import './header.css'

export function Header() {
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
                    <Link className="search-link header-link"to="/">
                        <span className="search-text">Search</span>
                    </Link>
                    <Link className="favorites-link header-link" to="/favorites">

                        <span className="orders-text">Favorites</span>
                    </Link>

                    <Link className="profile-link header-link" to="/profile">
                        <img className="profile-icon" src="images/user.png" />
                        
                    </Link>
                </div>
            </div>
    )
}