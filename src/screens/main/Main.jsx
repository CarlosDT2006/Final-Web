import React from "react";
import { useNavigate } from "react-router-dom";
export default function Main() {

    const navigate = useNavigate();

    return (
        <div>
            <h1>Estoy en la vista de main</h1>
            <button
                onClick={() => navigate('/usuario')}
            >Dirigir a Usuario</button>
        </div>
    )





}


