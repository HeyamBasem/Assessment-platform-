import { useEffect, useState } from "react";
import axios from "axios";

function ViewAssessments() {

    const [assessments, setAssessments] = useState([]);

    useEffect(() => {

        axios
            .get("http://localhost:8080/api/assessments")
            .then((response) => {
                setAssessments(response.data);
            })
            .catch((error) => {
                console.log(error);
            });

    }, []);

    return (
        <div className="container">

            <h1>Assessments</h1>

            <div className="dashboard-container">

                {assessments.map((assessment) => (

                    <div
                        key={assessment.id}
                        className="dashboard-card"
                    >
                        <h3>{assessment.title}</h3>

                        <p>
                            {assessment.description}
                        </p>

                    </div>

                ))}

            </div>

        </div>
    );
}

export default ViewAssessments;