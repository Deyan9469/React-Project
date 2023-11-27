import { Routes, Route } from 'react-router-dom'

import Footer from "./components/footer/Footer"
import Header from "./components/header/Header"
import Navigation from "./components/navigation/Navigation"
import './styles_template.css'
import CardItems from './components/cardComponent/RoutingItems'
function App() {


    return (
        <>
            <Navigation />
            <Header />

            <Routes>

                <Route path='/' element={<CardItems />} />

            </Routes>

            <Footer />
        </>
    )
}

export default App
