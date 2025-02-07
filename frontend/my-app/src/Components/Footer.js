import "./CSS/Footer.css"
import Nav from "./Nav"

function Footer() {
    return (
        <div className="footer">
            {/* <div className="doorImage">
                <img src="./assets/logo.png" style={{ width: '10vw', height: 'auto'}}  alt="door mat navigation image"></img>
            </div> */}
            {/* <div className="doorNav">
                <ul>Navigation: </ul>
                <Nav />
            </div> */}
            <div className="contact">
                <ul><br></br></ul>
                <ul><br></br></ul>
                <ul>🍋🍋🍋</ul>
                <ul>Contact:<br></br> 888-888-8888</ul>
                <ul>Email: <br></br>littlelemon@gmail.com</ul>
                <ul>Address: <br></br>12500 S 1300 E, Draper, UT 84020</ul>
                <ul>Follow us on: <br></br>Facebook</ul>
                <ul><br></br></ul>
            </div>
        </div>
    )
}

export default Footer;