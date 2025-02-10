import "./CSS/Card.css"

function Card(props) {
    return (
        <div className="card">
            <div className="imgContainer" style={{overflow:"hidden", gridRow:"1 / 4"}}>
                <img alt="menu dish" src={props.imgurl} style={{width:"100%", height:"100%"}}></img>
            </div>
            <div style={{display:"flex", gridRow:"4 / 6", }}>
                <p style={{flex:"3"}}>{props.name}</p>
                <p style={{color:"#EE9972", fontWeight:"medium", flex:"2"}}>${props.price}</p>
            </div>
            <p style={{lineHeight:"1.5", gridRow: "7 / 10"}}>{props.description}</p>
        </div>
    );
}

export default Card;