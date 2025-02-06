import {BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage  from "./HomePage";
import BookingPage from "./BookingPage";
import Login from "./Login";
import Menu from "./Menu";
import Loginsuccess from "./LoginSuccess";
import Register from "./Register";
import About from "./About";
import {useState, useEffect,  useReducer} from "react";
import ConfirmedBooking from "./ConfirmedBooking";
import {fetchAPI } from "./MimicAPI";

function Main() {

    const [selectedDate, setSelectedDate] = useState('');
    const [formData, setFormData] = useState({date:"", time:"", guest:0, occasion:""});

    const initialState = {
        availableTimes: ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"],
    };

    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');
    const todayFormatted = `${year}-${month}-${day}`

    useEffect(() => {
        const initializeTimes = () => {
            fetchAPI(todayFormatted)
            .then((response) => dispatch({ type: 'initializeTimes', payload: response}))
            .catch((error) => {console.log(error)})
        };
        initializeTimes();
    }, []);

    useEffect(() => {
        const updateTimes = () => {
            fetchAPI(selectedDate)
            .then((response) => dispatch({ type: 'updateTimes', payload: response}))
            .catch((error) => {console.log(error)})
        };

        updateTimes();

    }, [selectedDate]);

    const reducer = (state, action) => {
        if (action.type === "updateTimes") return {availableTimes: action.payload};
        if (action.type === "initializeTimes") return {availableTimes: action.payload};
        return state;
    }

    const [state, dispatch] = useReducer(reducer, initialState);


    return (
        <div className="main">
            <BrowserRouter>
                <Routes>
                    <Route path="/index.html" element={<HomePage />}></Route>
                    <Route path="/reservations.html" element={<BookingPage availableTimes={state.availableTimes} dispatch={dispatch} selectedDate={selectedDate} setSelectedDate={setSelectedDate} formData={formData} setFormData={setFormData}/>} ></Route>
                    <Route path="/reservationconfirmation.html" element={<ConfirmedBooking  formData={formData}/>} ></Route>
                    <Route path="/menu.html" element={<Menu />}></Route>
                    <Route path="/login.html" element={<Login />}></Route>
                    <Route path="/login-success.html" element={<Loginsuccess />}></Route>
                    <Route path="/register.html" element={<Register/>}></Route>
                    <Route path="/about.html" element={<About/>}></Route>
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default Main;
