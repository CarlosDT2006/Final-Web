import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import axios from "axios"; // Asegúrate de instalar axios con `npm install axios`
import './Reportes.css';

const Reportes = () => {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [report, setReport] = useState(null); // Estado para almacenar el reporte
  const [loading, setLoading] = useState(false); // Estado para manejar el loading
  const [error, setError] = useState(""); // Estado para manejar errores

  // Función para generar el reporte
  const handleGenerateReport = async (e) => {
    e.preventDefault();

    // Validar que la fecha de fin no sea anterior a la de inicio
    if (new Date(startDate) > new Date(endDate)) {
      setError("La fecha de fin no puede ser anterior a la fecha de inicio.");
      return;
    }

    setLoading(true);
    setError(""); // Limpiar cualquier mensaje de error previo

    try {
      // Llamada al backend para generar el reporte
      const response = await axios.post("/api/reportes/:usuarioId", { startDate, endDate });
      
      // Asumiendo que la respuesta contiene el reporte
      setReport(response.data); 
    } catch (err) {
      setError("Hubo un error al generar el reporte. Intenta nuevamente.");
    } finally {
      setLoading(false); // Dejar de mostrar el loading
    }
  };

  return (
    <div>
      <Navbar />

      <div className="reportes-container">
        <h1>Generar Reporte</h1>

        <form onSubmit={handleGenerateReport} className="reporte-form">
          <div className="form-group">
            <label>Fecha de Inicio</label>
            <input
              type="date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              className="input-field"
            />
          </div>

          <div className="form-group">
            <label>Fecha de Fin</label>
            <input
              type="date"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              className="input-field"
            />
          </div>

          <button type="submit" className="submit-button" disabled={loading}>
            {loading ? "Generando..." : "Generar Reporte"}
          </button>
        </form>

        {error && <p className="error-message">{error}</p>}

        {report && (
          <div className="report-result">
            <h2>Reporte Generado</h2>
            {/* Aquí puedes mostrar el contenido del reporte */}
            <pre>{JSON.stringify(report, null, 2)}</pre> {/* O renderiza el reporte como desees */}
          </div>
        )}
      </div>
    </div>
  );
}

export default Reportes;
