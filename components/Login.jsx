import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        // Logic for handling login
        console.log("Login submitted:", email, password);
    };

    return (
        <div className="flex items-center justify-center h-screen">
            <div className="bg-white rounded-md shadow-md p-8 w-full sm:w-[400px]">
                <h2 className="text-2xl font-bold mb-4 text-center">UnclutteredDesk</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="email" className="block mb-2">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            placeholder="Enter your email"
                            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="password" className="block mb-2">
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            placeholder="Enter your password"
                            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <button
                        type="submit"
                        className="bg-black text-white px-4 py-2 rounded w-full"
                    >
                        Login
                    </button>
                </form>
                <Link to="/forgotpassword" className="text-right block mt-2">Forgot Password?</Link>
            </div>
        </div>
    );
};

export default Login;
