import React from 'react'
import '../../styles/navbar.css'

const Navbar = () => {
    return (
        <div className = "navbar-container">
            <ul>
                <li className="nav-item">
                    <a href="#"> Inicio </a>
                </li>
                <li className="nav-item">
                    <a href="#"> Contenido </a>
                </li>
                <li className="nav-item">
                    <a href="#"> Categorias </a>
                </li>
                <li className="nav-item">
                    <a href="#"> Interes </a>
                </li>
            </ul>
        </div>
    )
}

export default Navbar
