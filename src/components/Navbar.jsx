import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'


export default function Navbar(props) {
    return (
        <>
            <nav className={`navbar bg-${props.mode.bgColor} navbar-expand-lg border-bottom`} data-bs-theme={props.mode.color}>
                <div className="container-fluid">
                    <NavLink className="navbar-brand Logo" to="/">Rabnawaz</NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink className={(e) => { return e.isActive ? "active nav-link" : "nav-link" }} aria-current="page" to="/">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className={(e) => { return e.isActive ? "active nav-link" : "nav-link" }} aria-current="page" to="/projects">Projects</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className={(e) => { return e.isActive ? "active nav-link" : "nav-link" }} to="/about">About</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className={(e) => { return e.isActive ? "active nav-link" : "nav-link" }} to="/contact">Contact</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className={(e) => { return e.isActive ? "active nav-link" : "nav-link" }} to="/login">Blog</NavLink>
                            </li>
                        </ul>
                        <form className="d-flex" role="search">
                            <div className="form-check form-switch">
                                <input onClick={props.toggleMode} className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                                <label className={`form-check-label text-${props.mode.textColor}`} htmlFor="flexSwitchCheckDefault">Dark Mode</label>
                            </div>
                        </form>
                    </div>
                </div>
            </nav>
        </>
    )
}
