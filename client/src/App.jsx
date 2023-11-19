import { Routes, Route } from 'react-router-dom'

import Footer from "./components/footer/Footer"
import Header from "./components/header/Header"
import Navigation from "./components/navigation/Navigation"
import Items from "./components/itemComponents/Items"
import './styles_template.css'
function App() {


    return (
        <>
            <Navigation />
            <Header />

            <Routes>

                <Route path='/' element={<Items />} />

            </Routes>

            <Footer />
        </>
    )
}

export default App
