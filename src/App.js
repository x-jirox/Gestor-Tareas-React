import './App.css';
import Title from './Componenets/Fragments/Title';
import ListaTareas from './Componenets/ListaTareas'

function App() {
  return (
    <div className="App">

      <Title />

      <div className='lista-tareas'>
        <h1>Mis tareas</h1>
        <ListaTareas />
      </div>

    </div>
  );
}

export default App;
