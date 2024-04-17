import './App.css';
import ListaDeTareas from './components/ListaDeTareas.jsx';

function App() {
  return (
    <div className="App_tareas">
      <div className='contenedor_logo'>
        <img
          className='logo_plexus'
          src={require('./images/logoplexus.png')} 
          alt="Logotipo plexus" />
      </div>
      <div className='tareas_lista_principal'>
        <h1>Mis Tareas</h1>
        <ListaDeTareas />
      </div>
    </div>
  );
}

export default App;
