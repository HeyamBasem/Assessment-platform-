import { useState } from "react";
import axios from "axios";

function ResetPassword() {

    const [email, setEmail] = useState("");
    const [newPassword, setNewPassword] = useState("");

    const handleReset = async (e) => {

        e.preventDefault();

        try {

            await axios.put(
                "http://localhost:8080/api/users/reset-password",
                {
                    email,
                    newPassword
                }
            );

            alert("Password Updated Successfully");

        } catch (error) {

            console.log(error);

            alert("Password Reset Failed");
        }
    };

    return (
        <div className="container">

            <h2>Reset Password</h2>

            <form onSubmit={handleReset}>

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
                    placeholder="Enter New Password"
                    value={newPassword}
                    onChange={(e) =>
                        setNewPassword(e.target.value)
                    }
                />

                <button type="submit">
                    Reset Password
                </button>

            </form>

        </div>
    );
}

export default ResetPassword;