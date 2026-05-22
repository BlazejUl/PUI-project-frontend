import { Header } from "../../components/Header"
import './HomePage.css'

export function HomePage({ isLoginOpen, setIsLoginOpen, loggedIn, setloggedIn }) {




    return (
        <>
            <title>Wyszukiwarka Lotów</title>

            <Header isLoginOpen={isLoginOpen}
                setIsLoginOpen={setIsLoginOpen}
                loggedIn={loggedIn}
                setloggedIn={setloggedIn} />

            <div className="home-page">
                <div className="search">
                    <input className="search-bar" type="text" placeholder="From" />
                    <input className="search-bar" type="text" placeholder="To" />
                    <input className="search-bar" type="text" placeholder="Departure" />
                    <input className="search-bar" type="text" placeholder="Number" />
                    <button className="search-button">
                        Search
                    </button>
                </div>
                <div className="flight-container">

                </div>

            </div>
        </>
    )
}