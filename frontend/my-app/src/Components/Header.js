import Nav from "./Nav"
import "../App.css"
import { ReactComponent as Logo } from './icons_assets/Logo.svg';

function Header() {
    return (
        <header className="header">
                <div className="logoContainer">
                    <Logo style={{width:"100%",  height: "auto"}} alt="Little Lemon Restaurant Logo"></Logo>
                </div>
                <Nav />
        </header>
    )
}

export default Header;