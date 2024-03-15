import { Link } from "react-router-dom"
import Cart from "../components/Cart"

function NavBar() {
    return (
        <header className="navbar__container">
            <nav>
                <Link to="/">VideoClub</Link>
            </nav>
            <div>
                <Cart />
            </div>
        </header>
    )
}

export default NavBar