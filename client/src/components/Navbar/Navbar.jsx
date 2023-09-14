import {Link} from 'react-router-dom';
import './navbar.css';
import Logo from "../../assets/Logo_F1.png";

function Navbar(){
    return (
        <nav className="mainContainer">
            <div className="logoContainer">
                <img className="logo" src={Logo} alt="logo" />
                <p>Drivers</p>
            </div>
            <Link className="navButton" to="/home">Home</Link>
    
            <Link className="navButton" to="create">Create your driver</Link>
        </nav>
    )
}

export default Navbar;