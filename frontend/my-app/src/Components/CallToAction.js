import "./CSS/HomePage.css"
import { Link } from 'react-router-dom';
import Restaurant from './assets/restaurant.jpg';


function CallToAction() {
    return (
        <section className="callToAction">
            <article className="intro">
                <h1 style={{textAlign: "left", marginTop: "0px", marginBottom: "1vw"}}>Little Lemon</h1>
                <h2 style={{textAlign: "left", marginTop: "0px", marginBottom: "1vw"}}>Salt Lake</h2>
                <p style={{textAlign: "left", color:"#EDEFEE", marginTop: "1vw", marginBottom: "1vw"}}>We are a family owned Chinese restaurant, focused on traditional recipes served with a modern twist. </p>
                <Link to="/reservations.html">
                    <button className="button">Reserve a table</button>
                </Link>
            </article>
            <section className="chefImageContainer">
                <img src={Restaurant} style={{ width: '25vw', height: 'auto', justifyContent:"center", alignItems:"center" }} alt="Restaurant.jpg"></img>
            </section>
        </section>
    );
}

export default CallToAction;