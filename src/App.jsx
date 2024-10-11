import { React } from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Main from './screens/main/Main.jsx'
import Usuario from './screens/usuario/Usuario.jsx'
import Login from './screens/login/Login.jsx'
import Register from './screens/register/Register.jsx'

function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/usuario' element={<Usuario />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />

      </Routes >
    </Router>
  )
}

export default App
