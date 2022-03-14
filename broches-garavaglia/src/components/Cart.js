import React, { useContext} from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../context/CartContext'
import '../App.css';
import Checkout from './Checkout'

const Cart = () => {

  const { items, removeCartItem, clearCart} = useContext(CartContext)
    
  if(items.length === 0){
    return (<>
      <h1>Carrito Vacio</h1>
      <p>Por favor seleccione productos</p>
      <Link to="/">Comprar</Link>
      </>)
  } else {
    return (
      <div>
      <ul>
        {items.map((item) => (
        <li key={item.id}>
          <img src={item.imagen} className="img" ></img> - Producto: {item.name} - Cantidad: {item.cantidad} - Precio: $ {item.price} - Total: {item.cantidad * item.price}    
          <button onClick={(event) => removeCartItem(item.id)}> Eliminar Producto</button>
        </li>))}
          <h4>Compra Total: ${items.reduce((acum, item) => acum + (item.cantidad * item.price),0)}</h4> 
        
        <button onClick={(event) => clearCart()}> Limpiar Carrito</button>
      </ul>
      <Checkout/>
    </div>
    )
  }

}

export default Cart

