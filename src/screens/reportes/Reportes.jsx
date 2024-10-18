import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import './Reportes.css';

const Reportes = () => {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const handleGenerateReport = (e) => {
    e.preventDefault();
    // Aquí puedes agregar la lógica para generar el reporte
    console.log(`Generando reporte desde ${startDate} hasta ${endDate}`);
    // Puedes implementar aquí la lógica para enviar los datos al backend y recibir el reporte
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

          <button type="submit" className="submit-button">Generar Reporte</button>
        </form>
      </div>
    </div>
  );
}

export default Reportes;
