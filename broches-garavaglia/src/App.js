import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
    <div className="productos">
      <NavBar/>  
      <hr/>
      <ItemListContainer />
    </div>
  );
}

export default App;
