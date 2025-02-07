
import {useState} from 'react';
import axios from 'axios';

function Register() {
    const[errors, setErrors] = useState({
        username:"",
        password:""
    });

    const[formData, setFormData] = useState({
        username:"",
        password:"",
    });

    const handleChange = (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.value });
    }

    const validateForm = ()=>{
        let valid = true;
        const newErrors = {username: "", password: "" };

        if(!formData.username) {
            valid = false;
            newErrors.username = "username can't be empty";
        }

        if(!formData.password) {
            valid = false;
            newErrors.password = "password can't be empty";
        }

        setErrors({
            username: newErrors.username,
            password: newErrors.password,
        });

        return valid;
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        setErrors("");
        if(validateForm()){
            submitForm();
        }
    }

    const submitForm = async () => {
        try {
            const response = await axios.post("http://localhost:8000/auth/users/", formData)
        }
        catch (error) {
            if (error.response && error.response.data) {
                setErrors({
                    username: error.response.data.username ? error.response.data.username[0] : "",
                    password: error.response.data.password ? error.response.data.password[0] : "",
                });
            } else {
                setErrors({ username: "An error occurred. Please try again.", password: "" });
            }
        }
    }

    return (
        <div style={{display:"grid", gridTemplateColumns:"repeat(1fr, 12)"}}>
            <div className='banner'>
                <h3 style={{color:"#F4CE14"}}>New User Registration</h3>
            </div>
            <form onSubmit={handleSubmit} style={{gridColumn:"3/10"}}>
              <ul>
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
                  <button type='submit'>Create</button>
              </ul>
          </form>
      </div>
    )

}

export default Register;