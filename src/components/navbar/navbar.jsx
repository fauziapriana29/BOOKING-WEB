import React from 'react'
import {NavLink} from 'react-router-dom'
import './navbar.css'

const Navbar = () => {
    return (
        <nav class="navbar navbar-expand-lg">
            <h3 className="title-navbar">BOOKING <b>APP</b></h3>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item active">
                        <NavLink class="nav-link fas fa-sign-in-alt fa-2x" to="/login"><span class="sr-only">(current)</span></NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar