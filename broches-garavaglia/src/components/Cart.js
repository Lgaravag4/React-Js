import React, { useContext} from 'react'
import { CartContext } from '../context/CartContext'

const Cart = () => {

  const { items } = useContext(CartContext)

  return (
    <div>
      <ul>
        {items.map(({item}) => (
        <li>
          {item.imagen} - {item.name} - {item.precio}
        </li>))}
      </ul>
    </div>
  )
}

export default Cart