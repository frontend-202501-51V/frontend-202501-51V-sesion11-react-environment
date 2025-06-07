import logo from './logo.svg';
import './App.css';
import { Saludo } from './Saludo'
import { Contador } from './Contador'
import { Boton } from './Boton';
import { Lista } from './Lista';

import Nav, { HOME_DEFAULT_TEXT } from './Nav'
import { FechaActual, FechaActualUpdated } from './FechaActual';


function App() {
  const botonActualizar = 'Actualizar v2'
  return (
    <div className="App">
      <p>Componente que me muestra la fecha actual</p>
      <FechaActualUpdated></FechaActualUpdated>
      <FechaActual></FechaActual>
      <hr />

      <p>uso de Nav</p>
      <Nav homeText={HOME_DEFAULT_TEXT}></Nav>

      <header className="App-header">


        <img src={logo} className="App-logo" alt="logo" />
        <Lista></Lista>

        <p>Boton reutilizable</p>
        {/* envio de informacion de padre a hijo */}
        <Boton texto={botonActualizar} tipo='info' disabled={true}></Boton>
        <Boton texto="Eliminar" tipo='danger' onClick={() => alert('eliminar?')}></Boton>
        <Boton texto="Confirmar" tipo='success'></Boton>

        <Contador></Contador>
        {/* usamos componente Saludo */}
        <Saludo></Saludo>
        <Saludo nombre='Miguel'></Saludo>
        <Saludo nombre='Raul'></Saludo>

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React v2
        </a>
      </header>
    </div>
  );
}

export default App;
