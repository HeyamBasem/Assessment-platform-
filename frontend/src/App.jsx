import { Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Register from "./pages/Register";
import AdminDashboard from "./pages/AdminDashboard";
import TeacherDashboard from "./pages/TeacherDashboard";
import StudentDashboard from "./pages/StudentDashboard";
import CreateAssessment from "./pages/CreateAssessment";
import ViewAssessments from "./pages/ViewAssessments";
import Schools from "./pages/Schools";
import Home from "./pages/Home";
function App() {
    return (
        <Routes>
            <Route
                path="/"
                element={<Home />}
            />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/admin-dashboard" element={<AdminDashboard />} />
            <Route path="/teacher-dashboard" element={<TeacherDashboard />} />
            <Route path="/student-dashboard" element={<StudentDashboard />} />
            <Route
                path="/create-assessment"
                element={<CreateAssessment />}
            />
            <Route
                path="/view-assessments"
                element={<ViewAssessments />}
            />
            <Route
                path="/schools"
                element={<Schools />}
            />
        </Routes>
    );
}

export default App;