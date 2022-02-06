import { useState } from "react";
import { Button, Card } from "react-bootstrap";
//import ItemCounter from "./ItemCounter";

const Item = ({prod}) => {

  const{id, imagen, name, price} = prod
  //const[stockSelected, setStockSelected] = useState(0)

  //const selectItem = () => setSelectedItem({id, name, price, imagen })
  // stock: stockSelected, 
  return (
  <>
    {/* <div>
        <h2>Nombre: {name}</h2>
        <h2>Precio: {price}</h2>
        <button onClick={selectItem}>Seleccionar Producto</button>
      <ItemCounter stock={stock} setStockSelected={setStockSelected}/>
        </div> */
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={imagen} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>$ {price}</Card.Text>
          <Button variant="primary">Detalle</Button>
        </Card.Body>
      </Card>
    }
  </>
  )
};

export default Item;
