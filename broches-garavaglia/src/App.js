import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';

function App() {
  const saludo = 'Bienvenidos!!!'

  return (
    <div className="productos">
      <NavBar/>  
      <hr/>
      <ItemListContainer greeting={saludo}/>
    </div>
  );
}

export default App;
