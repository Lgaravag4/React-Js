import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';

function App() {
  const saludo = 'Bienvenidos!!!'

  return (
    <div className="productos">
      <NavBar/>  
      <hr/>
      <ItemListContainer greeting={saludo}/>
      <ItemDetailContainer/>
    </div>
  );
}

export default App;
