import React, { useState } from 'react'
import { Button, Card } from "react-bootstrap";
import { Link } from 'react-router-dom';
import ItemCounter from "./ItemCounter";

const ItemDetail = ({selectedItem, setStockSelected }) => {

    const [show, setShow] = useState(true)

    const onAdd = (count) => {
        setShow(false)
        alert(`Producto: ${selectedItem.name} cantidad: ${count}`)
    }


  return (
    <div> <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={selectedItem && selectedItem.imagen} />
    <Card.Body>
      <Card.Title>{selectedItem && selectedItem.name}</Card.Title>
      <Card.Text>$ {selectedItem && selectedItem.price}</Card.Text>
     {show ? <ItemCounter stock={selectedItem && selectedItem.stock} setStockSelected={setStockSelected} onAdd={onAdd}/> : <div><Link to="/cart"><Button>Ir al Carrito</Button></Link><Link to="/"><Button>Seguir Comprando</Button></Link></div>}
      
    </Card.Body>
  </Card>
  </div>
  )
}

export default ItemDetail