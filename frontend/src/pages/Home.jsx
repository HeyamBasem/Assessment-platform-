import { useNavigate } from "react-router-dom";

function Home() {

    const navigate = useNavigate();

    return (
        <div className="container">

            <h1>Assessment Dashboard System</h1>

            <h3>Welcome To School Assessment Platform</h3>

            <button
                className="create-btn"
                onClick={() => navigate("/login")}
            >
                Login
            </button>

            <button
                className="create-btn"
                onClick={() => navigate("/register")}
            >
                Register
            </button>

        </div>
    );
}

export default Home;