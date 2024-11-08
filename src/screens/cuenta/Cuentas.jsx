import React, { useState, useEffect } from "react";
import Navbar from "../../components/Navbar"; 
import axios from 'axios';
import './Cuentas.css'; 

const Cuentas = () => {
  const [cuentas, setCuentas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchCuentas = async () => {
      const usuarioId = localStorage.getItem('usuarioId');

      if (!usuarioId) {
        setError("No se encontró el usuarioId. Asegúrate de haber iniciado sesión.");
        setLoading(false);
        return;
      }

      try {
        setLoading(true);

        // Llamada al backend con el usuarioId
        const response = await axios.get(`http://localhost:5000/api/cuentas/${usuarioId}`);
        console.log("Datos recibidos en el frontend:", response.data);

        // Verificar si la respuesta es un solo objeto y convertirlo en un array
        const cuentasData = Array.isArray(response.data) ? response.data : [response.data];

        if (cuentasData.length === 0) {
          setError("No se encontraron cuentas para este usuario.");
        } else {
          setCuentas(cuentasData);  // Guardamos la respuesta en un array
        }
      } catch (error) {
        setError("Error al obtener cuentas: " + error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCuentas();
  }, []);

  return (
    <div>
      <Navbar />
      <div className="cuentas-container">
        <h1>Bienvenido a tu Cuenta</h1>
        <p>Aquí podrás ver toda la información relacionada con tu cuenta.</p>

        {loading && <p>Cargando cuenta...</p>}
        {error && <p className="error-message">{error}</p>}

        {cuentas.length > 0 ? (
          cuentas.map((cuenta, index) => (
            <div className="account-info" key={index}>
              <h3>Tipo de Cuenta: {cuenta.tipo}</h3>
              <p>Saldo: ${cuenta.saldo}</p>
              <p>Número de cuenta: {cuenta.cuenta_id}</p>
            </div>
          ))
        ) : (
          !loading && <p>No se encontraron cuentas.</p>
        )}
        

      </div>
    </div>
  );
};

export default Cuentas;
