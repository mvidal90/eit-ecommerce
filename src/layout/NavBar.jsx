import { Link } from "react-router-dom"
import Cart from "../components/Cart"

function NavBar() {
    return (
        <header className="navbar__container">
            <div className="navbar__wrapper">
                <nav>
                    <Link to="/"><h1>Tienda online</h1></Link>
                    <Link to="/contact">Contactanos</Link>
                </nav>
                <div>
                    <Cart />
                </div>
            </div>
        </header>
    )
}

export default NavBar