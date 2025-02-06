import "../App.css"
import BookingForm from "./BookingForm"
import { useNavigate } from "react-router-dom";

function BookingPage(props) {
    const navigate = useNavigate();

    return (
        <section className="bookingPage">
            <div style={{background:"#495E57"}} className="reserveTitle">
                <h2 style={{gridRow:"1", color:"#F4CE14"}}>Reserve a table</h2>
            </div>
            <BookingForm availableTimes={props.availableTimes} dispatch={props.dispatch} selectedDate={props.selectedDate} setSelectedDate={props.setSelectedDate} navigate={navigate}  formData={props.formData} setFormData={props.setFormData}/>
        </section>
    )
}

export default BookingPage;