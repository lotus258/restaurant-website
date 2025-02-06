import "./CSS/Footer.css"
import Nav from "./Nav"

function Footer() {
    return (
        <div className="footer">
            <div className="doorImage">
                <img src="./assets/logo.png" style={{ width: '10vw', height: 'auto'}}  alt="door mat navigation image"></img>
            </div>
            <div className="doorNav">
                <ul>Navigation: </ul>
                <Nav />
            </div>
            <div className="contact">
                <ul>Contact:<br></br> 808-840-1225</ul>
                <ul>Email: <br></br>littlelemon@gmail.com</ul>
                <ul>Address: <br></br>14204 Skyler Dr. Draper, Utah, 84020</ul>
            </div>
            <div className="socialMedia">
                <ul>Social Media:</ul>
                <ul>Facebook</ul>
                <ul>TikTok</ul>
                <ul>Instagram</ul>
            </div>
        </div>
    )
}

export default Footer;