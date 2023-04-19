import { NavLink } from "react-router-dom";
import CartWidget from "./CartWidget";
const NavBar = () => {
    return (
        <>
            <header>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <div className="container-fluid">
                            <NavLink className="navbar-brand" to="/">UMORA SHOES</NavLink>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <NavLink className="nav-link text-light" to="/">Inicio</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link text-light" to="categoria/nike">Nike</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link text-light" to="categoria/puma">Puma</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link text-light" to="categoria/jordan">Jordan</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link text-dark" href="-/#"><CartWidget></CartWidget></NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    )
}

export default NavBar;