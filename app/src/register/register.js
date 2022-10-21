import "./register.css"
import { Link, useNavigate } from "react-router-dom"
import { useState } from "react";
import axios from "axios"

function Register() {

    const navigate = useNavigate();

    const [data, setdata] = useState ({
        name: "",
        email: "",
        password: ""
    })

    const handleInputChange = (e) => {
        let { name, value } = e.target;
        let newData = {...data, [name]: value};
        setdata(newData);
    }

    const handleSubmit = async(e) => {
        e.preventDefault();
        if(!e.target.checkValidity()) {
            console.log("Do not send");
        } else {
            let res = await axios.post("http://localhost:3000/user/signin", data)
            .then(res => {
                navigate('/')
            })
            console.log(res.data)
        }
    }

    return (
        <div className="register">

            <div className="register-container">
                <div className="regist-header">
                    <Link to="/">
                        <img className="arrow-img" src="/Imagenes/arrow-left.svg" />
                    </Link>
                    <h1>Create account</h1>
                </div>
                <form onSubmit={handleSubmit}>
                    <h2>Sign in to start your Pokemon app</h2>
                    <div className="form-element">
                        <label for="name">Full Name</label>
                        <input type="name" id="name" placeholder="Enter full name" name="name" onChange={handleInputChange} value={data.name}></input>
                        <label for="email">Email</label>
                        <input type="email" id="email" placeholder="Enter email" name="email" onChange={handleInputChange} value={data.email}></input>
                        <label for="password">Password</label>
                        <input type="password" id="password" placeholder="Create new password" name="password" onChange={handleInputChange} value={data.password}></input>
                        <div className="btn">
                            <button type="submit">Sign in</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Register;