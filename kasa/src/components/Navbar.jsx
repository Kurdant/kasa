import {Link} from "react-router-dom";
import Images from "./Logo";


const Navbar = () => {
    return (
        <div className="Navbar">
            <div className="NavbarImage">
            <Images/>
            </div>
            <div className="NavbarLinks">
            <Link to="/" className="NavBar_Links_a">Accueil</Link>
            <Link to="/a-propos" className="NavBar_Links_a">A Propos</Link>
            </div>
        </div>
    );
}

export default Navbar;