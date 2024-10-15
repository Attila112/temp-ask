import { useEffect, useState } from "react";

export default function Login() {
    const [userName, setUserName] = useState("");
    const [userPassword, setUserPassword] = useState("");

    // Move the addUser function outside of useEffect
    const loginUser = async (user) => {
        const response = await fetch("/api/users/login", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(user),
        });
        return await response.json();
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const user = {
            user_name: userName,
            user_password: userPassword,
        };
        try {
            const result = await loginUser(user);
            window.location.reload();
            console.log("User added:", result);
        } catch (error) {
            console.error("Error adding user:", error);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="login">
            <div>
                <label htmlFor='userName'>Username   </label>
                <input
                    id='userName'
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                />
            </div>
            <div>
                <label htmlFor='userPassword'>Password   </label>
                <input
                    id='userPassword'
                    type="password"
                    value={userPassword}
                    onChange={(e) => setUserPassword(e.target.value)}
                />
            </div>
            <button type="submit">Log In</button>
        </form>
    );
}
