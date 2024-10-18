import React from "react";
import { useNavigate } from "react-router-dom";

export default function Cuentas() {

    const navigate = useNavigate();


    return (

        <div>
            <h1>
                Estoy en la vista de usuario
            </h1>

            <button
                onClick={() => navigate('/cuentas')}
            >Dirigir a cuenta</button>

        </div>
    )




}


