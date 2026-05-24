import { Header } from "../../components/Header"
import "./ProfilePage.css"
import { useNavigate } from "react-router-dom"
import { useState } from "react";

export function ProfilePage({ isLoginOpen, setIsLoginOpen, loggedIn, setloggedIn }) {
    const [isEmailOpen, setIsEmailOpen] = useState(false);
    const [isPasswordOpen, setIsPasswordOpen] = useState(false);    
    const [isDeleteOpen, setIsDeleteOpen] = useState(false);
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
                    <button className="change-button"
                        onClick={() => {setIsEmailOpen(true)}}
                    >Change email</button>
                </div>
                <div className="divider">
                    <button className="change-button"
                        onClick={() => {setIsPasswordOpen(true)}}
                    >Change password</button>
                </div>
                <div className="divider">
                    <button className="change-button logOff-button" onClick={() => handleLogOff()}>Log off</button>
                </div>
                <div className="divider">
                    <button className="change-button logOff-button" onClick={() => setIsDeleteOpen(true)}>Delete profile</button>
                </div>

                 {isEmailOpen && (
                <div className="modal-overlay">
                    <div className="modal-box">
                        <h2>Change Email</h2>
                        <input type="text" placeholder="NewEmail" className="modal-input" />

                        <div className="modal-actions">
                            <button className="btn-submit" onClick={() => { setIsEmailOpen(false) }}>Change Email</button>

                            <button className="btn-close" onClick={() => setIsEmailOpen(false)}>
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {isPasswordOpen && (
                <div className="modal-overlay">
                    <div className="modal-box">
                        <h2>Change Password</h2>
                        <input type="password" placeholder="NewPassword" className="modal-input" />
                        <input type="password" placeholder="RepeatNewPassword" className="modal-input" />

                        <div className="modal-actions">
                            <button className="btn-submit" onClick={() => { setIsPasswordOpen(false) }}>Change Password</button>

                            <button className="btn-close" onClick={() => setIsPasswordOpen(false)}>
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {isDeleteOpen && (
                <div className="modal-overlay">
                    <div className="modal-box">
                        <h2>Delete Profile</h2>

                        <div className="modal-actions">
                            <button className="btn-delete" onClick={() => { setIsDeleteOpen(false); handleLogOff()}}>Delete Profile</button>

                            <button className="btn-submit" onClick={() => setIsDeleteOpen(false)}>
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            )}
            </div>

           
        </>
    )
}