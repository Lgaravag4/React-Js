import { useState } from "react";
import ItemCounter from "./ItemCounter";

const Item = ({id, name, price, stock, setSelectedItem}) => {
  const[stockSelected, setStockSelected] = useState(0)

  const selectItem = () => setSelectedItem({id, name, price, stock: stockSelected })
  
  return (
  <>
    <div>
        <h2>Nombre: {name}</h2>
        <h2>Precio: {price}</h2>
        <ItemCounter stock={stock} setStockSelected={setStockSelected}/>
        <button onClick={selectItem}>Seleccionar Producto</button>
    </div>
    <hr/>
  </>
  )
};

export default Item;
