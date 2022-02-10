import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const Item = ({prod}) => {

  const{id, imagen, name, price, category} = prod

  return (
  <>
    {
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={imagen} />
        <Card.Body>
          <Card.Title>{prod.name}</Card.Title>
          <Card.Text>$ {prod.price}</Card.Text>
          <Card.Text>Categoria: {prod.category}</Card.Text>
          <Link to={`/detalle/${prod.id}`}><Button variant="primary">Detalle</Button></Link>
        </Card.Body>
      </Card>
    }
  </>
  )
};

export default Item;
