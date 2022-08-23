import React from 'react'
import { Link, useLocation } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
  

const Navbar = () => {
    if(localStorage.getItem('token')){
        var log = "logout"
    }
    else{
        var log ="login"
    }
    const handleClick =()=>{
        if(localStorage.getItem('token')){
            localStorage.clear()
        }
        else{
            console.log('first login')
        }
    }
    let location = useLocation();
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/Home">Guvi</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className={`nav-link ${location.pathname==="/"? "active": ""}`} aria-current="page" to="/">Signup</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link ${location.pathname==="/profile"? "active": ""}`} to="/profile">Profile</Link>
                        </li>

                    </ul>
                    <form onClick={handleClick} className="d-flex"> 
                    <Link className="btn btn-primary mx-1"  to="/login" role="button">{log}</Link>
                    </form>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
