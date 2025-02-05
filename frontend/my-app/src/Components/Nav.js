import "../App.css"

function Nav(props) {
    return (
        <nav className={props.className}>
            <ul>
                <li><a href="./index.html">Home</a></li>
                <li><a href="./about.html">About</a></li>
                <li><a href="./menu.html">Menu</a></li>
                <li><a href="./reservations.html">Reservations</a></li>
                <li><a href="./orderOnline.html">Order Online</a></li>
                <li><a href="./login.html">Login</a></li>
            </ul>
        </nav>
    )
}

export default Nav;