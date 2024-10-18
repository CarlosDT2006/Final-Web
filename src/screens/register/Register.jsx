import React from "react";
import { useNavigate } from "react-router-dom";
import './register.css'

export default function Login() {

    const navigate = useNavigate();

    return (
        <div className="login-page"> 
            <div className="form"> 
                <form className="register-form"> 
                    <input type="text" placeholder="name" />
                    <input type="password" placeholder="password" />
                    <input type="text" placeholder="email address" />
                    <button type="submit">Create</button>
                    <p className="message">Already registered? <a href="/">Sign In</a></p>
                </form>
            </div>
        </div>
    );
}
