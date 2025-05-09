import React, { useState } from 'react';
import './login.css';
import logo from '../assets/images/logo.png';

export function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({});

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = {};
        if (!username.trim()) {
            validationErrors.username = "Username is required";
        }
        if (!password.trim()) {
            validationErrors.password = "Password is required";
        }

        setErrors(validationErrors);

        if (Object.keys(validationErrors).length === 0) {
            alert('Login successful');
        }
    };

    return (
        <div className="login-container">
            <div className="login-box">
                <div className="logo-container">
                    <img src={logo} alt="Logo" className="logo-img" />
                </div>
                <h2 className="text-center mb-4">Welcome Back</h2>
                <form className="login-form" onSubmit={handleSubmit}>
                    <div className="input-group">
                        <input
                            type="text"
                            name="username"
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
                            name="password"
                            placeholder="Password"
                            className="input-field"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        {errors.password && <p className="error-text">{errors.password}</p>}
                    </div>
                    <button type="submit" className="login-btn">Login</button>
                </form>
            </div>
        </div>
    );
}
