import { Routes, Route } from 'react-router-dom'

import Footer from "./components/footer/Footer"
import Header from "./components/header/Header"
import Navigation from "./components/navigation/Navigation"
import Items from "./components/itemComponents/Items"
import './styles_template.css'
import ItemList from './components/itemComponents/Itemcomp'
function App() {


    return (
        <>
            <Navigation />
            <Header />

            <Routes>

                <Route path='/' element={<ItemList />} />

            </Routes>

            <Footer />
        </>
    )
}

export default App
