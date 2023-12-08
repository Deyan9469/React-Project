import { Link } from 'react-router-dom';
import { useContext } from 'react';
import AuthContext from '../../contexts/authContext';
import "./userCSS.css"
const Navigation = () => {

    const { isAuthenticated, username, } = useContext(AuthContext);

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container px-4 px-lg-5">
                    <Link className="navbar-brand" to="/">
                        Bedsheets4You
                    </Link>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/contacts">
                                    Contacts
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" to="/about">
                                    About
                                </Link>
                            </li>
                            {isAuthenticated ?
                                <>

                                    <li className="nav-item-username"><span className='user'>{username}</span></li>

                                    <li className="nav-item">
                                        <Link className="nav-link active" aria-current="page" to="/logout"  >
                                            Logout
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link active" aria-current="page" to="/create"  >
                                            Create
                                        </Link>
                                    </li>
                                </>
                                :
                                <>
                                    <li className="nav-item">
                                        <Link className="nav-link active" aria-current="page" to="/login">
                                            Login
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link active" aria-current="page" to="/register">
                                            Register
                                        </Link>
                                    </li>
                                </>
                            }
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/comments"  >
                                    Comments
                                </Link>
                            </li>

                        </ul>
                        <form className="d-flex">
                            <Link  to="/cart" className="btn btn-outline-dark" type="submit">
                                <i className="bi-cart-fill me-1" />
                                Cart
                                <span className="badge bg-dark text-white ms-1 rounded-pill">
                                    0
                                </span>
                            </Link>
                        </form>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navigation;