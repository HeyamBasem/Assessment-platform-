import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
function TeacherDashboard() {

    const [dashboardData, setDashboardData] = useState(null);
    const navigate = useNavigate();
    useEffect(() => {

        axios
            .get("http://localhost:8080/api/dashboard/teacher")
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

            <h1>Teacher Dashboard</h1>
            <button
                className="create-btn"
                onClick={() => navigate("/create-assessment")}
            >
                + Create Assessment
            </button>
            <button
                className="create-btn"
                onClick={() => navigate("/view-assessments")}
            >
                View Assessments
            </button>
            <div className="dashboard-container">

                <div className="dashboard-card">
                    <h3>Total Assessments</h3>
                    <p>{dashboardData.totalAssessments}</p>
                </div>

                <div className="dashboard-card">
                    <h3>Total Submissions</h3>
                    <p>{dashboardData.totalSubmissions}</p>
                </div>

            </div>

        </div>
    );
}

export default TeacherDashboard;