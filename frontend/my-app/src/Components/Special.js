import "./CSS/HomePage.css"
import Card from "./Card"

function Special() {
    return (
        <section className="special">
            <section style={{display:"grid", gridTemplateColumns:"2fr 1fr"}}>
                <h2 style={{color:"#333", textAlign:"left"}}>This weeks' specials!</h2>
                <div style={{ textAlign: 'center', justifyContent:"center", display:"flex", alignItems:"center"}}>
                    <a href="./menu.html">
                        <button className="button">Online Menu</button>
                    </a>
                </div>
            </section>
            <section id="special_card">
                <Card name="Tonkotsu Ramen" imgurl = "./assets/greek salad.jpg" price="12.99" description="Rich and flavorful noodle soup with savory broth made from pork bones simmered for hours."/>
                <Card name="Shoyu Ramen" imgurl = "/assets/greek salad.jpg" price="15.99" description="Noodle soup characterized by its soy-based broth made by combining soy sauce with a rich pork stock."/>
                <Card name="Tiramisu " imgurl = "./assets/greek salad.jpg" price="4.50" description="Layers of coffee-soaked ladyfingers combined with creamy mascarpone cheese, egg yolks, sugar, and vanilla."/>
            </section>
        </section>
    );
}

export default Special;