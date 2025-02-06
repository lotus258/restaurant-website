import {useState, useEffect} from 'react';
import axios from "axios";

function Loginsuccess() {
    const [username, setUsername] = useState("");

    useEffect(() => {
        axios.get("http://localhost:8000/auth/users/me/", {
            headers: { Authorization: `Token ${localStorage.getItem("authToken")}` }
        })
        .then(response => {
            setUsername(response.data.username);
        })
        .catch(error => {
            console.error("Error fetching user:", error);
        });
    }, []);

    return <h1>Welcome, {username ? username : "Guest"}!</h1>;

}

export default Loginsuccess;