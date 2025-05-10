import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './signup.css';
import logo from '../assets/images/logo.png';

export function SignUp() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('');
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const validationErrors = {};
        if (!username.trim()) validationErrors.username = "Username is required";
        if (!password.trim()) validationErrors.password = "Password is required";
        if (!role) validationErrors.role = "Role is required";

        setErrors(validationErrors);

        if (Object.keys(validationErrors).length === 0) {
            try {
                const response = await fetch("http://localhost:5000/api/auth/signup", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ username, password, role }),
                });

                const data = await response.json();
                if (!response.ok) {
                    alert(data.message || "Signup failed.");
                } else {
                    alert("Signup successful. Please log in.");
                    navigate('/login');
                }
            } catch (err) {
                console.error(err);
                alert("Error signing up. Try again later.");
            }
        }
    };

    return (
        <div className="login-container">
            <div className="login-box">
                <div className="logo-container">
                    <img src={logo} alt="Logo" className="logo-img" />
                </div>
                <h2 className="text-center mb-4" style={{ color: 'red' }}>Sign Up</h2>
                <form className="login-form" onSubmit={handleSubmit}>
                    <div className="input-group">
                        <input
                            type="text"
                            placeholder="Username"
                            className="input-field"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                        {errors.username && <p className="error-text">{errors.username}</p>}
                    </div>
                    <div className="input-group">
                        <input
                            type="password"
                            placeholder="Password"
                            className="input-field"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        {errors.password && <p className="error-text">{errors.password}</p>}
                    </div>
                    <div className="input-group">
                        <label style={{ marginBottom: '0.5rem', fontWeight: 'bold' }}>Select Role</label>
                        <div>
                            <label style={{ marginRight: '1rem' }}>
                                <input
                                    type="radio"
                                    value="Coach"
                                    checked={role === 'Coach'}
                                    onChange={(e) => setRole(e.target.value)}
                                /> Coach
                            </label>
                            <label>
                                <input
                                    type="radio"
                                    value="Player"
                                    checked={role === 'Player'}
                                    onChange={(e) => setRole(e.target.value)}
                                /> Player
                            </label>
                        </div>
                        {errors.role && <p className="error-text">{errors.role}</p>}
                    </div>
                    <button type="submit" className="login-btn">Sign Up</button>
                </form>
                <p className="signup-link">Already have an account? <Link to="/login">Login</Link></p>
            </div>
        </div>
    );
}
