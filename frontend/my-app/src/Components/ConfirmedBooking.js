import { useLocation } from "react-router-dom";

function ConfirmedBooking() {
    const location = useLocation();
    const formData = location.state?.formData; 

    if (!formData) {
        return <p>No reservation details available.</p>;
    }

    return (
        <section className="reservationConfirmation">
            <div>
                <h3 style={{ color: "#495E57" }}>Your reservation has been successful! Here are the details:</h3>
                <p>
                    <b>Date: </b>{new Date(formData.booking_date).toLocaleDateString()}<br />
                    <b>Time: </b>{formData.booking_time}<br />
                    <b>Guest: </b>{formData.no_of_guests}<br />
                    <b>Occasion: </b>{formData.occasion}
                </p>
            </div>
        </section>
    );
}

export default ConfirmedBooking;
