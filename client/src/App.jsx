import { BrowserRouter, Route, Routes } from "react-router-dom"
import About from "./pages/About"
import SignUp from "./pages/SignUp"
import SignIn from "./pages/SignIn"
import Profile from './pages/Profile'
import Home from './pages/Home'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/about' element={<About />} />
        <Route path='/sign-up' element={<SignUp />} />
        <Route path='/sign-in' element={<SignIn />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/Home' element={<Home />} />

      </Routes>
    </BrowserRouter>
  )
}
