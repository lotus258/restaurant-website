function ConfirmedBooking(props) {
    return (
        <section className="reservationConfirmation">
            <div>
                <h3 style={{color:"#495E57"}}>Your reservation has been successful! Here are the details:</h3>
                <p><b>Date: </b>{props.formData.date}<br></br><b>Time: </b>{props.formData.time}<br></br><b>Guest: </b>{props.formData.guest}<br></br><b>Occasion: </b>{props.formData.occasion}</p>
            </div>
        </section>
    )
}

export default ConfirmedBooking;