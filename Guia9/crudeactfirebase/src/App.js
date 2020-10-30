import React from 'react';
//import logo from './logo.svg';
import './App.css';
import Empleado from "./componentes/empleado";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div className="container p-4">
      <div className="row">
        <Empleado />
      </div>
      <ToastContainer />
    </div>
  );
}

export default App;
