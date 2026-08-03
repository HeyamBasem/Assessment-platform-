import { useState } from "react";
import axios from "axios";

function CreateAssessment() {

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const handleSubmit = async (e) => {

        e.preventDefault();

        try {

            await axios.post(
                "http://localhost:8080/api/assessments",
                {
                    title,
                    description
                }
            );

            alert("Assessment Created Successfully");

            setTitle("");
            setDescription("");

        } catch (error) {

            console.log(error);

            alert("Failed To Create Assessment");
        }
    };

    return (
        <div className="container">

            <h1>Create Assessment</h1>

            <form onSubmit={handleSubmit}>

                <input
                    type="text"
                    placeholder="Assessment Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />

                <textarea
                    placeholder="Assessment Description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />

                <br /><br />

                <button type="submit">
                    Create Assessment
                </button>

            </form>

        </div>
    );
}

export default CreateAssessment;