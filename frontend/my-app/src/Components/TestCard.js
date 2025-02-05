
function TestCard(props) {
    return (
        <div className="testCard" style={{backgroundColor:"#EDEFEE", width:"100%", height:"100%"}}>
            <p style={{textAlign:"left"}}>{props.review}</p>
            <div style={{display:"flex", width:"100%", height:"auto", overflow:"hidden", alignContent:"center"}}>
                <img src="./assets/customer picture.jpg" alt="Customer" style={{width:"5vw"}}></img><p>{props.name}</p>
            </div>
        </div>
    );
}

export default TestCard;