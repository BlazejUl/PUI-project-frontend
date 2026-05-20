//import { useState } from 'react'
import {Routes, Route} from 'react-router'
import { HomePage } from './pages/home/HomePage'
import { ProfilePage } from './pages/profile/ProfilePage'
import { FavoritesPage } from './pages/favorites/FavoritesPage'

import './App.css'

function App() {
  //const [count, setCount] = useState(0)

  return (
    <Routes>
      <Route index element={<HomePage/>}/>
      <Route path="profile" element={<ProfilePage/>}/>
      <Route path="favorites" element={<FavoritesPage/>}/>
    </Routes>
  )
}

export default App
