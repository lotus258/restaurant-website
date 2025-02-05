import "./CSS/HomePage.css"
import TestCard from "./TestCard";

function CustomersSay () {
    return (
        <section className="customersSay">
            <div style={{alignContent:'center', gridRow:"1 / 5"}}>
                <h2 style={{color:"#333"}}>Testimonials</h2>
            </div>
            <div style={{display:"flex", gap: "1vw", gridRow:"6 / 11"}} className="testCardContainer">
                <TestCard review="4.9" name="John"></TestCard>
                <TestCard review="5.0" name="Alice"></TestCard>
                <TestCard review="4.8"name="Mary"></TestCard>
                <TestCard review="4.6" name="Jan"></TestCard>
            </div>
        </section>
    );
}

export default CustomersSay;