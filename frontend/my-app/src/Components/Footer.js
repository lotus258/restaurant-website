import "../App.css"
import Nav from "./Nav"

function Footer() {
    return (
        <div className="footer">
            <div className="doorImage">
                <img src="./assets/restauranfood.jpg" style={{ width: '10vw', height: 'auto', justifyContent:"center", alignItems:"center"}}  alt="door mat navigation image"></img>
            </div>
            <div className="doorNav">
                <p>Doormat Navigation:</p>
                <Nav />
            </div>
            <div className="contact">
                <p> Contact:</p>
                <p>Phone<br></br>Email<br></br>Address</p>
            </div>
            <div className="socialMedia">
                <p>Social Media Links: </p>
                <p>Phone<br></br>Email<br></br>Address</p>
            </div>
        </div>
    )
}

export default Footer;