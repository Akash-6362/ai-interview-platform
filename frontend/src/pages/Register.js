import { useState } from "react";

import { registerUser } from "../services/authService";

function Register() {

    const [formData, setFormData] = useState({

        name: "",
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

            const data = await registerUser(formData);

            alert("Registration Successful");

            console.log(data);

        } catch(error){

            console.log(error);

            alert("Registration Failed");
        }
    };

    return (

        <div className="form-container">

            <h2>Register</h2>

            <form onSubmit={handleSubmit}>

                <input
                    type="text"
                    name="name"
                    placeholder="Enter Name"
                    onChange={handleChange}
                />

                <br /><br />

                <input
                    type="email"
                    name="email"
                    placeholder="Enter Email"
                    onChange={handleChange}
                />

                <br /><br />

                <input
                    type="password"
                    name="password"
                    placeholder="Enter Password"
                    onChange={handleChange}
                />

                <br /><br />

                <button type="submit">
                    Register
                </button>

            </form>

        </div>
    );
}

export default Register;