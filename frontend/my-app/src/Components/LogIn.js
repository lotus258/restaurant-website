import axios from 'axios';
import {useNavigate} from 'react-router-dom';
import {useState} from 'react';

function Login(){

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        username: "",
        password: ""
    });

    const [errors, setErrors] = useState({
        username:"",
        password:"",
    })

    const handleChange = (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.value });
    };

    const [loginError, setLoginError] = useState(""); 


    const validateForm = () => {
        let valid = true;
        const newErrors = { username: "", password: "" };

        if (!formData.username) {
            newErrors.username = "Username is required.";
            valid = false;
        }

        if (!formData.password) {
            newErrors.password = "Password is required.";
            valid = false;

        } else if (formData.password.length < 6) {
            newErrors.password = "Password must be at least 6 characters long.";
            valid = false;
        }

        setErrors(newErrors);
        return valid;
    }

    const submitForm = async(formData) => {
        try {
            const response = await axios.post("http://localhost:8000/auth/token/login/", formData);
            const token = response.data.auth_token;
            localStorage.setItem("authToken", token);
            navigate("/login-success.html");
        } catch (error) {
            localStorage.removeItem("authToken");
            setLoginError("Invalid username and password combination. Please try again.")
            setFormData({username:"", password:"",});
            setErrors({username:"", password:"",});
        }
    }

    const handleSubmit = ((e) => {
        setLoginError("")
        e.preventDefault();
        if(validateForm()){
            submitForm(formData);
        }
    })

       return (
        <div>
            <div className="banner">
                <h2 style={{color:"#F4CE14"}}>Log in</h2>
            </div>
            <form onSubmit={handleSubmit}>
                <ul>
                    {loginError && <p style={{ color: "red" }}>{loginError}</p>}
                    <label>Username:&nbsp;&nbsp;&nbsp;</label>
                    <input type="text" name="username" placeholder="Username" onChange={handleChange} value={formData.username}></input>
                    {errors.username && <p style={{ color: "red" }}>{errors.username}</p>}
                </ul>
                <ul>
                    <label>Password:&nbsp;&nbsp;&nbsp;</label>
                    <input type="password" name="password" placeholder='Password' onChange={handleChange} value={formData.password}></input>
                    {errors.password && <p style={{ color: "red" }}>{errors.password}</p>}
                </ul>
                <ul>
                    <button type='submit' disabled={!formData.username || !formData.password}>Login</button>
                </ul>
                <ul>
                    <a href="/register.html">New user? register here </a>
                </ul>
            </form>
        </div>
    )
}

export default Login;