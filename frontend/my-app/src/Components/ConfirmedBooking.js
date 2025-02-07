function ConfirmedBooking(props) {
    return (
        <section className="reservationConfirmation">
            <div>
                <h3 style={{color:"#495E57"}}>Your reservation has been successful! Here are the details:</h3>
                <p><b>Date: </b>{new Date(props.formData.booking_date).toLocaleDateString()}<br></br><b>Time: </b>{props.formData.booking_time}<br></br><b>Guest: </b>{props.formData.no_of_guests}<br></br><b>Occasion: </b>{props.formData.occasion}</p>
            </div>
        </section>
    )
}

export default ConfirmedBooking;