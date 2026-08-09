
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post(
                "http://localhost:8080/api/users/login",
                {
                    email,
                    password,
                }
            );

            console.log(response.data);
            const user = response.data.user;

            if (user.role === "ADMIN") {
                navigate("/admin-dashboard");
            }
            else if (user.role === "TEACHER") {
                navigate("/teacher-dashboard");
            }
            else if (user.role === "STUDENT") {
                navigate("/student-dashboard");
            }

        } catch (error) {
            console.log(error);
            alert("Login Failed");
        }
    };

    return (
        <div className="login-page">

            <div className="overlay">

                <div className="login-card">

                    <h1 className="login-title">
                        Assessment Dashboard System
                    </h1>

                    <p className="login-subtitle">
                        School Management Platform
                    </p>

                    <form onSubmit={handleLogin}>

                        <input
                            type="email"
                            placeholder="Enter Email"
                            value={email}
                            onChange={(e) =>
                                setEmail(e.target.value)
                            }
                        />

                        <input
                            type="password"
                            placeholder="Enter Password"
                            value={password}
                            onChange={(e) =>
                                setPassword(e.target.value)
                            }
                        />  
<div className="forgot-password-container">
    <button
        type="button"
        className="forgot-password-btn"
        onClick={() => navigate("/reset-password")}
    >
        Forgot My Password?
    </button>
</div>
                        <button type="submit">
                            Login
                        </button>

                    </form>

                </div>

            </div>

        </div>
    );
}

export default Login;