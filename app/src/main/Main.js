import "./Main.css";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react"
import axios from "axios"



function Main() {

    const navigate = useNavigate()

    const [data, setdata] = useState ({
        email: "",
        password: ""
    })

    const handleInputChange = (e) => {
        let { name, value } = e.target;
        let newData = {...data, [name]: value};
        setdata(newData);
    }

    const headers = {
        'Content-Type' : 'application/json',
        'auth-token' : localStorage.getItem('token')
    }

    const handleSubmit = async(e) => {
        e.preventDefault();
        if(!e.target.checkValidity()) {
            console.log("Do not send");
        } else {
            await axios.post("http://localhost:3000/user/login", data, {
                headers: headers
            })
            // .then(response => {return response.json})
            .then(res => {
                console.log(res)
                if(res.error) {
                    alert('Failed Login!')
                } else {
                    localStorage.setItem('token', res.data.token);
                    console.log(localStorage.getItem('token'), res.data.token)
                    navigate('/homepage')
                }
            })
        }
    }
    console.log(localStorage.getItem('token'))
    
    useEffect(() =>{
        if(localStorage.getItem('token')) {
            console.log('hola')
            navigate('/homepage')
        }
    }, [])
 

    return (
    <div className="main">
        <h1>Welcome to Pokemon!</h1>
        <div className="login-container">
        <form onSubmit={handleSubmit}>
            <h2>Log in</h2>
            <div className="form-element">
                <label for="email">Email</label>
                <input type="email" id="email" placeholder="Enter email" name="email" onChange={handleInputChange} value={data.email}></input>
                <label for="password">Password</label>
                <input type="password" id="password" placeholder="Enter password" name="password" onChange={handleInputChange} value={data.password}></input>
            </div>
            <div className="rememberMe">
                <label for="remember me">Remember me?</label>
                <input type="checkbox" id="remember-me"></input>
            </div>
            <div className="btns">
                <button className="login-btn" type="submit">Log in</button>
                <Link className="signin-btn-link" to="/signin">
                    <button className="signin-btn">Sign in</button>
                </Link>
            </div>
        </form>
        </div>
    </div>
    )
}

export default Main;