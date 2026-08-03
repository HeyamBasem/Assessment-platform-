import { useEffect, useState } from "react";
import axios from "axios";

function StudentDashboard() {

    const [dashboardData, setDashboardData] = useState(null);

    useEffect(() => {

        axios
            .get("http://localhost:8080/api/dashboard/student")
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

            <h1>Student Dashboard</h1>

            <div className="dashboard-container">

                <div className="dashboard-card">
                    <h3>Completed Assessments</h3>
                    <p>{dashboardData.completedAssessments}</p>
                </div>

            </div>

        </div>
    );
}

export default StudentDashboard;