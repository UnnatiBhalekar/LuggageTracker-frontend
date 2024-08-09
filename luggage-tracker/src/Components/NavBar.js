import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar navbar-light bg-light">
                <Link className="navbar-brand" to="#">Luggage Tracker</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <Link className="nav-link" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/addItems">Add Items</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/items">Items</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/bag">Bags</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default NavBar