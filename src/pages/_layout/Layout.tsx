import { Link, Outlet } from 'react-router-dom';
import './ui/Layout.css';

export default function Layout() {
    return <>    
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
            <a className="navbar-brand" href="#">Navbar</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <Link to="/"><i className="bi bi-house"></i></Link>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="#">Link</a>
                    </li>                
                </ul>
                <form className="d-flex" role="search">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                    <button className="btn btn-outline-success" type="button">Search</button>
                </form>
            </div>
        </div>
    </nav>


    <nav>
        <Link to="/">Home</Link> |{" "}
        <Link to="/group">About</Link> |{" "}
        <Link to="/no-page">404</Link> |{" "}
    </nav>

    <Outlet />
    
    <footer>
        &copy; IT STEP, 2026
    </footer>
    </>;
}