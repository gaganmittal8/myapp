import React from 'react';
import { Link, NavLink, useNavigate } from "react-router-dom";

const Header = (props) => {
    const navigate = useNavigate();

    const logout = () => {
        localStorage.clear();
        navigate('/');
    }
    return (
        <>
            <header className='header'>
                <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
                    <Link className="navbar-brand" to="/">{props.title}</Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/dashboard">Dashboard</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/calculator">Calculator</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/gallery">Gallery</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/navigation">Navigation</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/plot">Plot</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/slider">Slider</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/todo">Todo Lists</NavLink>
                            </li>
                        </ul>
                        <div className={`custom-control custom-switch text-${props.mode === 'light' ? 'dark' : 'light'}`}>
                            <input type="checkbox" className="custom-control-input" id="customSwitch1" onClick={props.toggleMode}/>
                            <label className="custom-control-label" htmlFor="customSwitch1">{props.mode === 'light' ? 'Light Mode' : 'Dark Mode'}</label>
                        </div>
                        <div className='ml-2'>
                            <button className='btn btn-danger' onClick={logout} type='button'>Logout</button>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    )
}

export default Header;
