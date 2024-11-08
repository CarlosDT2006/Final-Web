import { React } from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Main from './screens/main/Main.jsx'
import Usuario from './screens/usuario/Usuario.jsx'
import Login from './screens/login/Login.jsx'
import Register from './screens/register/Register.jsx'
import Reportes from './screens/reportes/Reportes.jsx' 
import Depositosretiros from './screens/depositosretiros/Depositosretiros.jsx'
import Deuda from './screens/deuda/Deuda.jsx'
import Historial from './screens/historial/Historial.jsx'
import Prestamos from './screens/prestamos/Prestamos.jsx'
import Cuentas from './screens/cuenta/Cuentas.jsx'
import Transferencias from './screens/transferencias/Transferencias.jsx'
function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/register' element={<Register />} />
        {/* <Route path='/usuario' element={<Usuario />} /> */}
        <Route path='/cuentas' element={< Cuentas />} />
        <Route path='/transferencias' element={<Transferencias />} />
        <Route path='/depositosretiros' element={<Depositosretiros />} />
        <Route path='/historial' element={<Historial />} />
        <Route path='/prestamos' element={<Prestamos />} />
        <Route path='/deuda' element={<Deuda />} />
        <Route path='/reportes' element={<Reportes />} />



      </Routes >
          </Router>
  )
}

export default App
