import { useState } from "react";

import { loginUser } from "../services/authService";

function Login() {

    const [formData, setFormData] = useState({

        email: "",
        password: ""
    });

    const handleChange = (e) => {

        setFormData({

            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {

        e.preventDefault();

        try {

            const data = await loginUser(formData);

            // Save token
            localStorage.setItem(
                "token",
                data.token
            );

            alert("Login Successful");

            console.log(data);

        } catch(error){

            console.log(error);

            alert("Login Failed");
        }
    };

    return (

        <div className="form-container">

            <h2>Login</h2>

            <form onSubmit={handleSubmit}>

                <input
                    type="email"
                    name="email"
                    placeholder="Enter Email"
                    onChange={handleChange}
                />

                <input
                    type="password"
                    name="password"
                    placeholder="Enter Password"
                    onChange={handleChange}
                />

                <button type="submit">
                    Login
                </button>

            </form>

        </div>
    );
}

export default Login;