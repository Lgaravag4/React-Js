import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Routes1 from './components/Routes';
import { CartProvider } from './context/CartContext';

function App() {
  const saludo = 'Bienvenidos!!!'

  return (
    <div className="productos">
      
      <CartProvider>
        <Routes1/>  
      </CartProvider>
    </div>
  );
}

export default App;
