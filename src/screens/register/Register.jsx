import React from "react";
import { useNavigate } from "react-router-dom";
import './register.css'

export default function Login() {

    const navigate = useNavigate();

    return (
        <div className="login-page"> {/* Cambiado a className */}
            <div className="form"> {/* Cambiado a className */}
                <form className="register-form"> {/* Cambiado a className */}
                    <input type="text" placeholder="name" />
                    <input type="password" placeholder="password" />
                    <input type="text" placeholder="email address" />
                    <button type="submit">Create</button>
                    <p className="message">Already registered? <a href="/login">Sign In</a></p>
                </form>
            </div>
        </div>
    );
}
