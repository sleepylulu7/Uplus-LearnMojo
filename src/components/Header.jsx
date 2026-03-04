import logo from "../assets/images/logo-white.png"
import "./Header.css"

function Header() {
    return (
        <div className = "header_div">
            <img className = "logo" src = {logo} />
            <h1 className = "title">Learning Hub</h1>
        </div>
    );
}

export default Header;