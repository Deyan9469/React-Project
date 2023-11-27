import { Routes, Route } from 'react-router-dom'

import Footer from "./components/footer/Footer"
import Header from "./components/header/Header"
import Navigation from "./components/navigation/Navigation"
import './styles_template.css'
import CardItems from './components/cardComponent/RoutingItems'
import About from './components/about/About'
import Contacts from './components/contacts/Contacts'
import Login from './components/login/Login'
function App() {


    return (
        <>
            <Navigation />
            <Header />

            <Routes>

                <Route path='/' element={<CardItems />} />
                <Route path='/about' element={<About />} />
                <Route path='/contacts' element={<Contacts />} />
                <Route path='/login' element={<Login />} />

            </Routes>

            <Footer />
        </>
    )
}

export default App
