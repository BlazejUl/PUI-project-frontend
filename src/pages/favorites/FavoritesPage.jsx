import { Header } from "../../components/Header"
import './FavoritesPage.css'

export function FavoritesPage({ isLoginOpen, setIsLoginOpen, loggedIn, setloggedIn }) {




    return (
        <>
            <title>Wyszukiwarka Lotów</title>

            <Header isLoginOpen={isLoginOpen}
                setIsLoginOpen={setIsLoginOpen}
                loggedIn={loggedIn}
                setloggedIn={setloggedIn} />

            <div className="favorites-page">
                <p className="text">Favorites</p>
                <div className="favorites-container">

                </div>
            </div>
        </>
    )
}