import { BrowserRouter, Route, Routes } from "react-router-dom"
import About from "./pages/About"
import SignUp from "./pages/SignUp"
import SignIn from "./pages/SignIn"
import Profile from './pages/Profile'
import Home from './pages/Home'
import Header from "./components/Header"

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>

        <Route path='/about' element={<About />} />
        <Route path='/sign-up' element={<SignUp />} />
        <Route path='/sign-in' element={<SignIn />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/' element={<Home />} />

      </Routes>
    </BrowserRouter>
  )
}
