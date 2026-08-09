import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function AdminDashboard() {

    const [dashboardData, setDashboardData] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {

        axios
            .get("http://localhost:8080/api/dashboard/admin")
            .then((response) => {
                setDashboardData(response.data);
            })
            .catch((error) => {
                console.log(error);
            });

    }, []);

    if (!dashboardData) {
        return <h2>Loading...</h2>;
    }

    return (

        <div className="container">

            <h1>Admin Dashboard</h1>

            <div className="navbar">

    <button
        className="nav-btn"
        onClick={() => navigate("/create-assessment")}
    >
        Create Assessment
    </button>

    <button
        className="nav-btn"
        onClick={() => navigate("/view-assessments")}
    >
        View Assessments
    </button>

    <button
        className="nav-btn"
        onClick={() => navigate("/schools")}
    >
        View Schools
    </button>

    <button
        className="logout-nav-btn"
        onClick={() => navigate("/login")}
    >
        Logout
    </button>

</div>
            <div className="dashboard-container">

                <div className="dashboard-card">
                    <h3>Total Users</h3>
                    <p>{dashboardData.totalUsers}</p>
                </div>

                <div className="dashboard-card">
                    <h3>Total Assessments</h3>
                    <p>{dashboardData.totalAssessments}</p>
                </div>

                <div className="dashboard-card">
                    <h3>Total Submissions</h3>
                    <p>{dashboardData.totalSubmissions}</p>
                </div>

                <div className="dashboard-card">
                    <h3>Total Results</h3>
                    <p>{dashboardData.totalResults}</p>
                </div>



            </div>

        </div>

    );

}

export default AdminDashboard;