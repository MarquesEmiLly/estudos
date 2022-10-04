import './App.css';
import AnimalComponent from './Animal';
import PlantaComponente from './Planta';

function App() {
  return (
    <div className="App">
      <AnimalComponent animalType={"coelho"}/>
      <PlantaComponente tiposPlanta={"girassol"}/>
    </div>
  );
}

export default App;
