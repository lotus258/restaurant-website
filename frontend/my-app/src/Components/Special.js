import "./CSS/HomePage.css"
import Card from "./Card"

function Special() {
    return (
        <section className="special">
            <section style={{display:"grid", gridTemplateColumns:"2fr 1fr"}}>
                <h2 style={{color:"#333", textAlign:"left"}}>This weeks' specials!</h2>
                <div style={{ textAlign: 'center', justifyContent:"center", display:"flex", alignItems:"center"}}>
                    <button className="button">Online Menu</button>
                </div>
            </section>
            <section id="special_card">
                <Card name="Greek Salad" imgurl = "./assets/greek salad.jpg" price="$12.99" description="We are a family owned Mediterian restaurant. Focused on traditional recipes served with a modern twist."/>
                <Card name="Bruchetta" imgurl = "/assets/greek salad.jpg" price="$5.99" description="We are a family owned Mediterian restaurant. Focused on traditional recipes served with a modern twist."/>
                <Card name="Lemon Dessert" imgurl = "./assets/greek salad.jpg" price="$5.00" description="We are a family owned Mediterian restaurant. Focused on traditional recipes served with a modern twist."/>
            </section>
        </section>
    );
}

export default Special;