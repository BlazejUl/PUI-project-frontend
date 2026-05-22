import { Header } from "../../components/Header"
import "./ProfilePage.css"
import { useNavigate } from "react-router-dom"

export function ProfilePage({ isLoginOpen, setIsLoginOpen, loggedIn, setloggedIn }) {
        const navigate = useNavigate();
        const handleLogOff = () => {
            setloggedIn(false)
            navigate("/")

        } 



    return (
        <>
            <title>Wyszukiwarka Lotów</title>

            <Header isLoginOpen={isLoginOpen}
                setIsLoginOpen={setIsLoginOpen}
                loggedIn={loggedIn}
                setloggedIn={setloggedIn} />

            <div className="profile-page">
                <p className="text">Profile</p>
                <div className="divider">
                    <button className="change-button">Change email</button>
                </div>
                <div className="divider">
                    <button className="change-button">Change password</button>
                </div>
                <div className="divider">
                    <button className="change-button logOff-button" onClick={handleLogOff}>Log off</button>
                </div>
            </div>
        </>
    )
}