import React, { useContext} from 'react'
import { Link } from 'react-router-dom'
import { products } from '../assets/products/products'
import { CartContext } from '../context/CartContext'
import '../App.css';

const Cart = () => {

  const { items, removeCartItem, clearCart, addItem} = useContext(CartContext)

  const handleClickOnRemove = (productId) => {
    removeCartItem(productId)
  }

  const handleClickClear = () => {
    clearCart()
  }

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
          <button onClick={(event) => handleClickOnRemove(item.id)}> Eliminar Producto</button>
        </li>))}
        <button onClick={(event) => handleClickClear()}>Limpiar Carrito</button>
      </ul>
    </div>
    )
  }

}

export default Cart

