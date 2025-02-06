import AvailableTimes from "./AvailableTimes";
import {useState} from "react";
// import { submitAPI} from "./MimicAPI";
import axios from 'axios'

function BookingForm(props) {
    const [name, setName] = useState("");
    const [resTime, setResTime] = useState("");
    const [date, setDate] =  useState("");
    const [guest, setGuest] = useState(0);
    const [occasion, setOccasion] = useState("");

    const handleDateChange = (event) => {
        const newDate = new Date(event.target.value);
        setDate(event.target.value);
    };

    const handleNameChange = (event) => {
        setName(event.target.value);
    };
    const handleGuestChange = (event) => {
        setGuest(event.target.value);
    };

    const handleTimeChange = (event) => {
        setResTime(event.target.value);
    };

    const handleOccassionChange = (event) => {
        setOccasion(event.target.value);
    };

    const submitForm = ((formData) => {
        try {
            axios.post("http://localhost:8000/restaurant/booking/tables/", formData);
            props.navigate('/reservationconfirmation.html');
        } catch (error) {
            console.log(error);
        }
    })

    const handleSubmit = (e) => {
        e.preventDefault();
        const selectedDate = props.selectedDate;
        const formData = {date:selectedDate, name:name, date:date, time:resTime, guest:guest, occasion:occasion};
        props.setFormData(formData);
        submitForm(formData);
    };

    return (
            <form onSubmit={handleSubmit} className="bookingForm">
                <label htmlFor="name" style={{padding: "10px"}} >Name</label>
                <input type="text" id="name" onChange={handleNameChange} data-testid="name" required></input>
                <label htmlFor="res-date" style={{padding: "10px"}} >Choose date</label>
                <input type="date" id="res-date"  onChange={handleDateChange} data-testid="res-date" required></input>
                <label htmlFor="res-time"style={{padding: "10px"}}>Choose time</label>
                <select id="res-time" value={resTime} onChange={handleTimeChange} required>
                    <option value="SelectBelow">Select Below:</option>
                    <AvailableTimes availableTimes={props.availableTimes} style={{padding: "10px"}}/>
                </select>
                <label htmlFor="guests" style={{padding: "10px"}}>Number of guests</label>
                <input type="number" placeholder="1" min="1" max="10" id="guests" onChange={handleGuestChange} required></input>
                <label htmlFor="occasion" style={{padding: "10px"}}>Occasion</label>
                <div className="occasionContainer">
                    <select id="occasion" value={occasion} onChange={handleOccassionChange} required>
                        <option value="SelectBelow">Select Below:</option>
                        <option value="Birthday">Birthday</option>
                        <option value="Anniversary">Anniversary</option>
                        <option value="Other">Other</option>
                    </select>
                </div>
                <div style={{padding: "10px"}}></div>
                <button type="submit" disabled={!resTime || !guest || !occasion}>Make Your reservation</button>
            </form>
    )
}

export default BookingForm;