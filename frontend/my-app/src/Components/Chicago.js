function Chicago () {
    return (
        <section className="chicago">
            <article className="intro" style={{gridColumn:"1 / 7", gridRow:"1 / 7"}}>
                <h1 style={{textAlign: "left", marginTop: "0px", marginBottom: "1vw", color:"black"}}>Little Lemon</h1>
                <h2 style={{textAlign: "left", marginTop: "0px", marginBottom: "1vw", color:"black"}}>SLC</h2>
                <p style={{textAlign: "left", color:"black", marginTop: "1vw", marginBottom: "1vw"}}>We are a family owned Chinese restaurant, focused on traditional recipes served with a modern twist.</p>
            </article>

            <section className="RestaurantImageContainer" style={{gridColumn:"7 / 13", gridRow:"3 / 13", position:"relative"}}>
                <img src="./assets/restauranfood.jpg" style={{ width: '20vw', height: '25vw', justifyContent:"center", alignItems:"center", position:"absolute", bottom:"0", right:"10vw" }} alt="Restaurant.jpg"></img>
                <img src="./assets/restauranfood.jpg" style={{ width: '20vw', height: '25vw', justifyContent:"center", alignItems:"center", position:"absolute", top:"0", right:"0", opacity: 1, zIndex:"1"}} alt="Restaurant.jpg"></img>
            </section>
        </section>
    )
}

export default Chicago;