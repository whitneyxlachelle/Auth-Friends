import React, { useState, useEffect } from "react";
import axios from "axios";

const LoginForm = () => {
    //console.log(props);
    const [credentials, setCredentials] = useState({
        username: "",
        password: ""
    });
    //const [isLoading, setIsLoading] = useState(false);

    const handleChange = event => {
        event.preventDefault();
        setCredentials({
            ...credentials,
            [event.target.name]: event.target.value,
        })
    }

    const handleSubmit = event => {
        event.preventDefault()
        axios
        .post("/api/login", credentials)
        .then(res => {
            console.log(res);
            localStorage.setItem("token", res.data.token)
        })
        .catch(error => {
            console.log(error);
        });
    };

    return (
        <div>
            <form onSubmit={handleSubmit} >
                <input
                    type="text"
                    name="username"
                    value={credentials.username}
                    onChange={handleChange}
                    placeholder="Username"
                />
                <input
                    type="password"
                    name="password"
                    value={credentials.password}
                    onChange={handleChange}
                    placeholder="Password"
                />
                <button className="button">Log In</button>
            </form>
        </div>
    )
}

export default LoginForm;
