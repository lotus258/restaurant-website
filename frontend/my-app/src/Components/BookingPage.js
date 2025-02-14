import "./CSS/Reservation.css"
import BookingForm from "./BookingForm"

function BookingPage() {

    return (
        <section className="bookingPage">
            <div className="banner">
                <h2 style={{color:"#F4CE14"}}>Reserve a table</h2>
            </div>
            <BookingForm />
        </section>
    )
}

export default BookingPage;