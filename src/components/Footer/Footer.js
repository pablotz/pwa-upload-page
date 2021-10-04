import React from 'react'
import '../../styles/footer.css'

const Footer = () => {
    return (
        <div className = "footer-container">
            <h2 className="footer-title">¡Gracias por tu visita!</h2>

            <div className="about-us">
                <h4>Acerca de nosotros</h4>
                <ul>
                    <li><a>Conocenos</a></li>
                    <li><a>Acerca de</a></li>
                </ul>
            </div>
            <div className="contact">
            
            <h4>Contacto</h4>
                <ul>
                    <li><a href="#">FAQ</a></li>
                    <li><a href="#">Contacto</a></li>
                </ul>
            </div>

            <div className="copyright">
            <h3 className="copyright-title">COPYRIGHT</h3>
            <p>TODOS LOS DERECHOS RESERVADOS &copy;</p>
            <p>Web creada por: <strong>Pablo Hernández Castillo</strong></p>
            </div>
        </div>
    )
}

export default Footer
