//import { useState } from 'react'
import { Routes, Route } from 'react-router'
import { HomePage } from './pages/home/HomePage'
import { ProfilePage } from './pages/profile/ProfilePage'
import { FavoritesPage } from './pages/favorites/FavoritesPage'
import { useState } from 'react'

import './App.css'

function App() {
  //const [count, setCount] = useState(0)

  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [loggedIn, setloggedIn] = useState(false);

  return (
    <Routes>
      <Route index element={<HomePage isLoginOpen={isLoginOpen}
        setIsLoginOpen={setIsLoginOpen}
        loggedIn={loggedIn}
        setloggedIn={setloggedIn} />} />
      <Route path="profile" element={<ProfilePage isLoginOpen={isLoginOpen}
        setIsLoginOpen={setIsLoginOpen}
        loggedIn={loggedIn}
        setloggedIn={setloggedIn} />} />
      <Route path="favorites" element={<FavoritesPage isLoginOpen={isLoginOpen}
        setIsLoginOpen={setIsLoginOpen}
        loggedIn={loggedIn}
        setloggedIn={setloggedIn} />} />
    </Routes>
  )
}

export default App
