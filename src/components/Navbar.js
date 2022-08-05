import { FaGlobeAmericas } from "react-icons/fa"

function Navbar() {
    return (
        <nav>
            <a onClick={() => window.location.reload(false)}><FaGlobeAmericas className="nav-icon"/></a>
            <h1 className="nav-title">my travel journal.</h1>
        </nav>
    )
}

export default Navbar;