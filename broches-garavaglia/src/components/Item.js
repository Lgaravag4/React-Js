import { useState } from "react";
import { Button, Card } from "react-bootstrap";


const Item = ({prod}) => {

  const{id, imagen, name, price} = prod

  return (
  <>
    {
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
