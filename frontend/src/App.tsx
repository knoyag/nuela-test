import React from 'react';
import Sidebar from './components/Sidebar'; 
import Dashboard from './components/Dashboard';
import Profesores from './components/Profesores';
import HorasTotales from './components/HorasTotales'; 
import './App.css'; 
import { Navbar, Button } from 'react-bootstrap';

const App: React.FC = () => {
  
  const totalHorasSemana = 40; 

  return (
    <div className="app-container">
      <Sidebar /> 
      <div className="content">
        <Navbar bg="light" expand="lg" className="mb-4"> 
          <Navbar.Brand href="#">
            Profesores
          </Navbar.Brand>
        </Navbar>
        <Profesores /> 
        <div className="button-container"> 
          <Button variant="outline-primary" className="mr-2">Semanal</Button> 
          <Button variant="outline-primary">Anual</Button> 
        </div>
        <HorasTotales totalHorasSemana={totalHorasSemana} /> 
        <div className="separator" /> 
        <Dashboard />
      </div>
    </div>
  );
};

export default App;
