import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';


function App() {
 
  return (
    <div className="App">
      <NavBar/>
      <ItemListContainer
      greeting='Hola! Bienvenido a Cornicione Pizza!'/>
    </div>
  );
}

export default App;
