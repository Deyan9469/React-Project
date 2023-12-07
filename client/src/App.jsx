import { Routes, Route } from 'react-router-dom'

import { AuthProvider } from './contexts/authContext'

import './styles_template.css'
import Footer from "./components/footer/Footer"
import Header from "./components/header/Header"
import Navigation from "./components/navigation/Navigation"
import CardItems from './components/cardComponent/RoutingItems'
import About from './components/about/About'
import Contacts from './components/contacts/Contacts'
import Login from './components/login/Login'
import Register from './components/register/Register'
import Logout from './components/logout/Logout'
import CreateCard from './components/create/CreateCard'
import Comments from './components/comments/Comments'
import EditPage from './components/edit/EditPage'
import CardDetails from './components/CardDetails/CardDetails'
import AuthGuard from './components/guards/AuthGuard'


function App() {


    return (
        <>
            <AuthProvider >
                <Navigation />
                <Header />

                <Routes>

                    <Route path='/' element={<CardItems />} />
                    <Route path='/about' element={<About />} />
                    <Route path='/contacts' element={<Contacts />} />
                    <Route path='/login' element={<Login />} />
                    <Route path='/register' element={<Register />} />
                    <Route path='/logout' element={<Logout />} />
                    <Route path='/comments' element={<Comments />} />
                    <Route path='/edit/:cardId' element={<EditPage />} />
                    <Route path='/carddDetails/:cardId' element={<CardDetails />} />

                    <Route element={<AuthGuard />}>
                        <Route path='/create' element={<CreateCard />} />

                    </Route>

                </Routes>

                <Footer />
            </AuthProvider>
        </>
    )
}

export default App
