import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const Item = ({product}) => {

  const{id, imagen, name, price, category} = product
  
  return (
  <>
    {
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={imagen} style={{ width: '100px' , height: '100px'}}/>
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>$ {price}</Card.Text>
          <Card.Text>Categoria: {category}</Card.Text>
          <Link to={`/detalle/${id}`}><Button variant="primary">Detalle</Button></Link>
        </Card.Body>
      </Card>
    }
  </>
  )
};

export default Item;
