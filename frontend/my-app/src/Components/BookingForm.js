import AvailableTimes from "./AvailableTimes";
import {useState} from "react";
import axios from 'axios'
import { useNavigate } from "react-router-dom";

function BookingForm(props) {
    const [name, setName] = useState("");
    const [resTime, setResTime] = useState("");
    const [date, setDate] =  useState("");
    const [guest, setGuest] = useState(0);
    const [occasion, setOccasion] = useState("");

    const navigate = useNavigate();

    const initialState = {
        availableTimes: ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"],
    };

    const handleDateChange = (event) => {
        const newDate = new Date(event.target.value);
        setDate(newDate);
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

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = {booking_date:date, name:name, booking_time:resTime, no_of_guests:guest, occasion:occasion};

        try {
            await axios.post("http://localhost:8000/restaurant/booking/tables/", formData);
            navigate('/reservationconfirmation.html', {state: {formData}});

        } catch (error) {
            console.log(error);
        }
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
                    <AvailableTimes availableTimes={initialState.availableTimes} style={{padding: "10px"}}/>
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