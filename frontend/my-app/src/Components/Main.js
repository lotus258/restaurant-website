import {BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage  from "./HomePage";
import BookingPage from "./BookingPage";
import Login from "./Login";
import Menu from "./Menu";
import Loginsuccess from "./LoginSuccess";
import Register from "./Register";
import About from "./About";
import ConfirmedBooking from "./ConfirmedBooking";

function Main() {
    return (
        <div className="main">
            <BrowserRouter>
                <Routes>
                    <Route path="/index.html" element={<HomePage />}></Route>
                    <Route path="/reservations.html" element={<BookingPage />} ></Route>
                    <Route path="/reservationconfirmation.html" element={<ConfirmedBooking />} ></Route>
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
