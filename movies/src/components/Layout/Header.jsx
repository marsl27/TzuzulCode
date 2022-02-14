import {Link} from "react-router-dom"
import Logo from "../../images/logo.png"
import "../../css/Header.css"

export default function Footer() {
    return (
        <header className="header">
            <div className="containerLogo">
                <img src={Logo} alt="logo movie"/>
                <h3>MovieMar</h3>
            </div>
        
          <nav className="menu">
            <ul>
                <li /*onClick={crear buscador }*/>Buscar</li>
                <li><Link to= "/movies">Películas</Link></li>
                <li><Link to="/login">Ingresar</Link></li>
            </ul>
        </nav>
        </header>
    )
}